import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Class/articulo';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-art',
  templateUrl: './alta-art.component.html',
  styleUrls: ['./alta-art.component.css']
})
export class AltaArtComponent implements OnInit {

  /*    <div class="form-group col-md-3 center">
    <label for="exampleFormControlTextarea1">Descripcion</label>
    <textarea   [(ngModel)]="my_art.descripcion" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <p>puto el que lee</p>
    <p>{{}}</p>
  </div>
*/


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
  constructor(private _service:ArticuloService) { }

  ngOnInit() {
  }

  postArt(){
    this._service.add(this.my_art).subscribe
    (art=>{


    })
  }

}
