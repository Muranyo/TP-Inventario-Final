import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-baja-art',
  templateUrl: './baja-art.component.html',
  styleUrls: ['./baja-art.component.css']
})
export class BajaArtComponent implements OnInit {

  constructor(private _service:ArticuloService,private _activated:ActivatedRoute,private route:Router) { }

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
  delete(id:number)
  {
    this._service.delete(id).subscribe
    (art=>{
     this.getAll();
  
    })
  }



}
