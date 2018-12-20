import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/Services/proveedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-baja-proveed',
  templateUrl: './baja-proveed.component.html',
  styleUrls: ['./baja-proveed.component.css']
})
export class BajaProveedComponent implements OnInit {

  constructor(private _service:ProveedorService,private _activated:ActivatedRoute) { }

  ngOnInit() {

    this._activated.url.subscribe(response=>
      {
          this.getAll();

      })

  }

  getAll()
  {
    this._service.list().subscribe(
      provList=>{
        this._service.proveedores=provList;
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
