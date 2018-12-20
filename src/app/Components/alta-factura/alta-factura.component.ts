import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { Factura } from 'src/app/Class/factura';
import { FacturaService } from 'src/app/Services/factura.service';
import { isNumber } from 'util';
import { Articulo } from 'src/app/Class/articulo';

@Component({
  selector: 'app-alta-factura',
  templateUrl: './alta-factura.component.html',
  styleUrls: ['./alta-factura.component.css']
})
export class AltaFacturaComponent implements OnInit {


  fac:Factura={
    id:null,
    pto_venta:0,
    num_correlativo:0,
    fecha:null,
    tipo:'',
    total_comprado:0,
    lista_de_items:[],
    clinomape:'',
    clicuil:'',
    clidir:''
  };


  art_finded:Articulo;
  arts_to_update:Articulo[];
  art_agregados_mostrar:string[];
  id_client:number;
  id_art_select:number=0;
  cant:number;
  iva:number=0;
  tipo:string;


  constructor(private _serviceF:FacturaService, private _serviceA:ArticuloService, private _serviceC:ClienteService,private route:Router,private _activated:ActivatedRoute)
  {
    this.art_agregados_mostrar=[];
    this.arts_to_update=[];
  }

  managerArt(art:Articulo){
    this.fac.total_comprado+=art.precio_de_venta_de_lista*this.cant;
    this.fac.lista_de_items.push(art.codigo+"|"+art.nombre+"|"+art.descripcion+"|"+
    art.rubro+"|"+art.precio_de_venta_de_lista+"|"+this.cant+"|"+this.iva);
    this.art_agregados_mostrar.push(art.nombre+" cant: "+this.cant);
  }

  agregarArt()
  {

    if(this.id_art_select==null)
    {
      alert("Seleccione un articulo por favor");
      return;
    }

    this._serviceA.getById(this.id_art_select).subscribe(art=>{

 
      if(this.cant<1 || this.iva==null)
      {
        alert("Cantidad erronea por favor verifique la cantidad que desea");
        return ;
      }

      if(art.cantidad_en_stock<this.cant)
      {
        alert("Stock insuficiente, quedan :"+art.cantidad_en_stock+" articulos");
        return;
      }


      for(let i in this.arts_to_update)
      {
        if(this.arts_to_update[i].id==art.id)
        {
          this.art_finded=this.arts_to_update[i];
          break;
        }
      }


      if(this.art_finded)
      {
        this.art_finded.cantidad_en_stock-=this.cant;

        if(this.art_finded.cantidad_en_stock<0)
        {
          alert("Estas intentando comprar mas que la cantidad el stock");
          return;
        }
       this.managerArt(art);

        this.arts_to_update=this.arts_to_update.filter(elem=>{elem.id!=art.id})
        this.arts_to_update.push(this.art_finded);
        console.log(this.art_finded.cantidad_en_stock);
        return;
        
      }
      art.cantidad_en_stock-=this.cant;
      this.arts_to_update.push(art);
      this.managerArt(art);
      

      console.log(art.cantidad_en_stock);

    })


  }

  confirmFactura()
  { 
    if(this.fac.lista_de_items.length==0)
    {
      alert("Agregue almenos un item a la fctura");
      return;
    }

    if(this.tipo==null)
    {
      alert("Seleccione un tipo de factura por favor");
      return;
    }
    else
    this.fac.tipo=this.tipo;

    if(this.fac.pto_venta==0 || this.fac.pto_venta==null)
    {
      alert("Pto de venta invalido");
      return;
    }

    if(this.fac.num_correlativo==null)
    {
      alert("Numero Correlativo invalido");
      return;
    }

    if(this.fac.fecha==null)
    {
      alert("Error en fecha");
      return;
    }
    


    if(this.id_client!=null && this.id_client!=0)
    {
      this._serviceC.getById(this.id_client).subscribe(cli=>{

        this.fac.clicuil=cli.cuil;
        this.fac.clidir=cli.direccion;
        this.fac.clinomape=cli.nombre+" "+cli.apellido;
       

        console.log(this.fac.clicuil);
        this._serviceF.add(this.fac).subscribe(res=>{
          this._serviceF.faceg=this.fac;
          this._serviceF.facing=null;

          for(let i in this.arts_to_update)
          {
            this._serviceA.modif(this.arts_to_update[i]).subscribe(res=>{

            })

          }

    
          console.log("Factura Creada");
          this.route.navigate(["/ListFac"]);
        })

      })
    }
    else
      {
        alert("Problema con el cliente seleccione uno valido");
        return;
      }



  }



  


  ngOnInit() {

    this._activated.url.subscribe(response=>
      {
          this.getAll();
          this.getAllArt();

      })

  }


  getAllArt()
  {
    this._serviceA.list().subscribe(
      artList=>{
        this._serviceA.articulos=artList;
      }
    )
  }


  getAll()
  {
    this._serviceC.list().subscribe(
      cliList=>{
        this._serviceC.clientes=cliList;
      }
    )
  }
}