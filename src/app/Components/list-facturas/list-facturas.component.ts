import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/Services/factura.service';
import { ProdsEg } from 'src/app/Class/prods-eg';
import { ProdsIng } from 'src/app/Class/prods-ing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-facturas',
  templateUrl: './list-facturas.component.html',
  styleUrls: ['./list-facturas.component.css']
})
export class ListFacturasComponent implements OnInit {

  array_split:string[];
  prodseg:ProdsEg[];
  prodsing:ProdsIng[];
  count:number=0;

  iva21:number=0;
  iva10:number=0;
  Total:number=0;

  constructor(private _service:FacturaService,private route:Router) {
    this.array_split=[];
    this.prodseg=[];
    this.prodsing=[];

    if(this._service.faceg!=null){
    for(let i in this._service.faceg.lista_de_items){
    this.array_split=this._service.faceg.lista_de_items[this.count].split("|");
    console.log(this.array_split);
    let a= new ProdsEg(     
      this.array_split[0],
      this.array_split[1],
      this.array_split[2],
      this.array_split[3],
      this.array_split[4],
      this.array_split[5],
      this.array_split[6],
      parseInt(this.array_split[4])*parseInt(this.array_split[5])
    )
    if(this.array_split[6]=="21")
    {
        this.iva21+= 21/100*a.precio_prods;
        this.Total+=this.iva21;
    }
    
    if(this.array_split[6]=='10.5')
    {
      this.iva10=10.5/100*a.precio_prods;
      this.Total+=this.iva10;
    }

    this.prodseg.push(a);
    this.count++;

  }
    this.Total+=this._service.faceg.total_comprado;
  }
  else{

    this.count=0;
    console.log(this._service.facing.lista_de_items[0]);
    for(let i in this._service.facing.lista_de_items){
      this.array_split=this._service.facing.lista_de_items[this.count].split("|");
      console.log(this.array_split);

      let a= new ProdsIng(     
        this.array_split[0],
        this.array_split[1],
        this.array_split[2],
        this.array_split[3],
        this.array_split[4],
        this.array_split[5],
        this.array_split[6],
        parseInt(this.array_split[4])*parseInt(this.array_split[5])
      )

      console.log(a);
      if(this.array_split[6]=="21")
      {
          this.iva21+= 21/100*a.precio_prods;
          this.Total+=this.iva21;
      }
      
      if(this.array_split[6]=='10.5')
      {
        this.iva10=10.5/100*a.precio_prods;
        this.Total+=this.iva10;
      }
  
      this.prodsing.push(a);
      this.count++;
  
    }
    console.log(this.prodsing);
      this.Total+=this._service.facing.total_comprado;
    

  }
 
  }

  confirmar()
  {
    this.route.navigate(["/Home"]);
  }

  ngOnInit() {
  }

}
