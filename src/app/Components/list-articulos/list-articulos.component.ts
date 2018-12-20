import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/Class/articulo';

@Component({
  selector: 'app-list-articulos',
  templateUrl: './list-articulos.component.html',
  styleUrls: ['./list-articulos.component.css']
})
export class ListArticulosComponent implements OnInit {

  

  constructor(private _service:ArticuloService,private route:Router,
    private _activated:ActivatedRoute) { }

  ngOnInit() {

    this._activated.url.subscribe(response=>
      {
          this.getAll();

      })

  }

  getAll()
  {
    this._service.list().subscribe(
      artList=>{
        this._service.articulos=artList;
      }
    )
  }


  modif(art:Articulo){
    this._service.art_selected=art;
    this.route.navigate(["/ModifArt"]);
  }

}
