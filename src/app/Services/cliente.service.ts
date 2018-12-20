import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Class/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

url:string='http://localhost:3002';
clientes:Cliente[];
selected_client:Cliente;

  constructor(private _http:HttpClient) {
    this.clientes=[];
   }

   add(cli:Cliente):Observable<Cliente>
   {
    return this._http.post<Cliente>(this.url+'/add_cli',cli);
   }

   delete(id:number):Observable<Cliente>
   {
     return this._http.delete<Cliente>(this.url+'/delete_cli/'+id);
   }

   modif(cli:Cliente):Observable<Cliente>
   {
     return this._http.put<Cliente>(this.url+'/update_cli/'+cli.id,cli);
   }

   list():Observable<Cliente[]>
   {
     return this._http.get<Cliente[]>(this.url+'/list_cli');
   }

   getById(id:number):Observable<Cliente>
   {
     return this._http.get<Cliente>(this.url+'/list_cli/'+id);
   }
  }
