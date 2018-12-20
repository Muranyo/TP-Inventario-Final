import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Class/proveedor';
import { ProveedorService } from 'src/app/Services/proveedor.service';

@Component({
  selector: 'app-alta-proveed',
  templateUrl: './alta-proveed.component.html',
  styleUrls: ['./alta-proveed.component.css']
})
export class AltaProveedComponent implements OnInit {


  my_prov:Proveedor={
    id:null,
    nombre:"",
    direccion:"",
    localidad:"",
    telefono:"",
    cuit:""
  }


  constructor(private _service:ProveedorService) { }

  ngOnInit() {
  }

  postProv(){
    this._service.add(this.my_prov).subscribe(
      prov=>{
        
      }
    )
  }

}
