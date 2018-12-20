import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Class/cliente';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-alta-client',
  templateUrl: './alta-client.component.html',
  styleUrls: ['./alta-client.component.css']
})
export class AltaClientComponent implements OnInit {


  my_client:Cliente={
    id:null,
    nombre:"",
    apellido:"",
    direccion:"",
    telefono:"",
    cuil:""
  }


  constructor(private _service:ClienteService) { }

  ngOnInit() {
  }

  postClient(){
    this._service.add(this.my_client).subscribe(
      cli=>{
        
      }
    )
  }

}
