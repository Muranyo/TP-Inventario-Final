import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-baja-client',
  templateUrl: './baja-client.component.html',
  styleUrls: ['./baja-client.component.css']
})
export class BajaClientComponent implements OnInit {

  constructor(private _service:ClienteService,private _activated:ActivatedRoute) { }

  ngOnInit() {

    this._activated.url.subscribe(response=>
      {
          this.getAll();

      })

  }

  getAll()
  {
    this._service.list().subscribe(
      cliList=>{
        this._service.clientes=cliList;
      }
    )
  }

  delete(id:number)
  {
    this._service.delete(id).subscribe
    (res=>{
      this.getAll();
    })
  }


}
