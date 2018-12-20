import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/Class/cliente';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(private _service:ClienteService,private route:Router,private _activated:ActivatedRoute)
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
      cliList=>{
        this._service.clientes=cliList;
      }
    )
  }


  modif(art:Cliente){
    this._service.selected_client=art;
    this.route.navigate(["/ModifCli"]);
  }
}