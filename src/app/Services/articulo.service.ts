import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../Class/articulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

url:string='http://localhost:3002'
articulos:Articulo[];
art_selected:Articulo;

  constructor(private _http:HttpClient) {
    this.articulos=[];
   }

   add(art:Articulo):Observable<Articulo>
   {
    return this._http.post<Articulo>(this.url+'/add_art',art);
   }

   delete(id:number):Observable<Articulo>
   {
     return this._http.delete<null>(this.url+'/delete_art/'+id);
   }

   modif(art:Articulo):Observable<Articulo>
   {
     return this._http.put<Articulo>(this.url+'/update_art/'+art.id,art);
   }

   list():Observable<Articulo[]>
   {
     return this._http.get<Articulo[]>(this.url+'/list_art');
   }
   getById(id:number):Observable<Articulo>
   {
     return this._http.get<Articulo>(this.url+'/list_art/'+id);
   }
}
