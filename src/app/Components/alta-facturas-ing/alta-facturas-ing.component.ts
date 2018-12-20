import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { FacturaService } from 'src/app/Services/factura.service';
import { FacturaIng } from 'src/app/Class/factura-eg';
import { ProveedorService } from 'src/app/Services/proveedor.service';
import { Articulo } from 'src/app/Class/articulo';


@Component({
  selector: 'app-alta-facturas-ing',
  templateUrl: './alta-facturas-ing.component.html',
  styleUrls: ['./alta-facturas-ing.component.css']
})
export class AltaFacturasIngComponent implements OnInit {

  
  fac:FacturaIng={
    id:null,
    pto_venta:0,
    num_correlativo:0,
    fecha:null,
    tipo:'',
    total_comprado:0,
    lista_de_items:[],
    provnom:'',
    provcuit:'',
    provdir:''
  };


  art_finded:Articulo;
  arts_to_update:Articulo[];
  art_agregados_mostrar:string[];
  id_prov:number;
  id_art_select:number=0;
  cant:number;
  iva:number=0;
  tipo:string;


  constructor(private _serviceF:FacturaService, private _serviceA:ArticuloService, private _serviceP:ProveedorService,private route:Router,private _activated:ActivatedRoute)
  {
    this.arts_to_update=[];
    this.art_agregados_mostrar=[];
  }

  ngOnInit() {

    this._activated.url.subscribe(response=>
      {
          this.getAll();
          this.getAllArt();

      })

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
        console.log("AGREGAR"+this.cant);
        console.log("TENGO"+this.art_finded.cantidad_en_stock);
      

        this.art_finded.cantidad_en_stock=(this.cant*1+this.art_finded.cantidad_en_stock*1);
        console.log("FINAL"+this.art_finded.cantidad_en_stock)

        this.managerArt(art);

        this.arts_to_update=this.arts_to_update.filter(elem=>{elem.id!=art.id})
        this.arts_to_update.push(this.art_finded);
        console.log(this.art_finded.cantidad_en_stock);
        return;
      }

      art.cantidad_en_stock=(this.cant*1+1*art.cantidad_en_stock);
      this.arts_to_update.push(art);
      this.managerArt(art);
      

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
    


    if(this.id_prov!=null && this.id_prov!=0)
    {
      this._serviceP.getById(this.id_prov).subscribe(prov=>{

        this.fac.provcuit=prov.cuit;
        this.fac.provdir=prov.direccion;
        this.fac.provnom=prov.nombre;
       

        console.log(this.fac.provcuit);
        this._serviceF.addIng(this.fac).subscribe(res=>{
          this._serviceF.facing=this.fac;
          this._serviceF.faceg=null;

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
        alert("Problema con el proveedor seleccione uno valido");
        return;
      }



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
    this._serviceP.list().subscribe(
      provList=>{
        this._serviceP.proveedores=provList;
      }
    )
  }
}