import { Injectable } from '@angular/core';
import { Proveedor } from '../Class/proveedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {


  url:string='http://localhost:3002';
  proveedores:Proveedor[];
  selected_prov:Proveedor
  
    constructor(private _http:HttpClient) {
      this.proveedores=[];
     }
  
     add(p:Proveedor):Observable<Proveedor>
     {
      return this._http.post<Proveedor>(this.url+'/add_prov',p);
     }
  
     delete(id:number):Observable<Proveedor>
     {
       return this._http.delete<Proveedor>(this.url+'/delete_prov/'+id);
     }
  
     modif(p:Proveedor):Observable<Proveedor>
     {
       return this._http.put<Proveedor>(this.url+'/update_prov/'+p.id,p);
     }
  
     list():Observable<Proveedor[]>
     {
       return this._http.get<Proveedor[]>(this.url+'/list_prov');
     }

     getById(id:number):Observable<Proveedor>
     {
       return this._http.get<Proveedor>(this.url+'/list_prov/'+id);
     }
    }
  