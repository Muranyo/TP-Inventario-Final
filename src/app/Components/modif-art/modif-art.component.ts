import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { Articulo } from 'src/app/Class/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-art',
  templateUrl: './modif-art.component.html',
  styleUrls: ['./modif-art.component.css']
})
export class ModifArtComponent implements OnInit {

  my_art:Articulo={
    id:null,
    codigo:0,
    nombre:"",
    descripcion:"",
    rubro:"",
    precio_de_compra:0,
    precio_de_venta_de_lista:0,
    cantidad_en_stock:0
  };
  constructor(private _service:ArticuloService,private route:Router) { 
    
  }

  ngOnInit() {
  }

  putArt(){
    this._service.modif(this._service.art_selected).subscribe
    (art=>{
      this.route.navigate(["/ListArt"]);

    })
  }
}