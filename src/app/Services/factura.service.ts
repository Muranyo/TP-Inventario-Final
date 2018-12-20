import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../Class/factura';
import { FacturaIng } from '../Class/factura-eg';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {


  url:string='http://localhost:3002';
  
    faceg:Factura;
    facing:FacturaIng;
  
    constructor(private _http:HttpClient) {
  
     }
     
     add(f:Factura):Observable<Factura>
     {
      return this._http.post<Factura>(this.url+'/add_fac',f);
     }

     addIng(f:FacturaIng):Observable<FacturaIng>
     {
      return this._http.post<FacturaIng>(this.url+'/add_facIng',f);
     }

     list():Observable<Factura[]>
     {
       return this._http.get<Factura[]>(this.url+'/list_fac');
     }

     listIng():Observable<FacturaIng[]>
     {
       return this._http.get<FacturaIng[]>(this.url+'/list_facIng');
     }

     getById(id:number):Observable<Factura>
     {
       return this._http.get<Factura>(this.url+'/list_fac/'+id);
     }

     getByIdIng(id:number):Observable<FacturaIng>
     {
       return this._http.get<FacturaIng>(this.url+'/list_facIng/'+id);
     }


    }
  