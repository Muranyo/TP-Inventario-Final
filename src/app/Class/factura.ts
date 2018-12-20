import { Articulo } from "./articulo";
import { Proveedor } from "./proveedor";
import { Cliente } from "./cliente";

export class Factura {
    id:number;
    pto_venta:number;
    num_correlativo:number;
    fecha:Date;
    tipo:string;
    total_comprado:number;
    lista_de_items:string[];
    clinomape:string;
    clicuil:string;
    clidir:string;


    constructor(values:Object={}){
        Object.assign(this,values);
  }

}



