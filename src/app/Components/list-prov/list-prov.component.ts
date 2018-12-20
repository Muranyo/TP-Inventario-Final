import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/Services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Proveedor } from 'src/app/Class/proveedor';

@Component({
  selector: 'app-list-prov',
  templateUrl: './list-prov.component.html',
  styleUrls: ['./list-prov.component.css']
})
export class ListProvComponent implements OnInit {

  constructor(private _service:ProveedorService,private route:Router,private _activated:ActivatedRoute)
  {

  }

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


  modif(prov:Proveedor){
    this._service.selected_prov=prov;
    this.route.navigate(["/ModifProv"]);
  }
}