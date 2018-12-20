import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Class/proveedor';
import { ProveedorService } from 'src/app/Services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-proveed',
  templateUrl: './modif-proveed.component.html',
  styleUrls: ['./modif-proveed.component.css']
})
export class ModifProveedComponent implements OnInit {

  my_prov:Proveedor={
    id:null,
    nombre:"",
    direccion:"",
    localidad:"",
    telefono:"",
    cuit:""
  }


  constructor(private _service:ProveedorService,private route:Router) { 
    this.my_prov = _service.selected_prov
  }

  ngOnInit() {
  }

  putProv(){
    this._service.modif(this.my_prov).subscribe(
      prov=>{
        this.route.navigate(["/ListProv"]);
      }
    )
  }
}

