export class FacturaIng {

    id:number;
    pto_venta:number;
    num_correlativo:number;
    fecha:Date;
    tipo:string;
    total_comprado:number;
    lista_de_items:string[];
    provnom:string;
    provcuit:string;
    provdir:string;


    constructor(values:Object={}){
        Object.assign(this,values);
  }


}
