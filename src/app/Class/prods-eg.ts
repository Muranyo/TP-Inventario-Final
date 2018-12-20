export class ProdsEg {

    codigo:string;
    nombre:string;
    descripcion:string;
    rubro:string;
    precio_de_venta:string;
    cantidad:string;
    iva:string;
    precio_prods:number;

    constructor(c:string,n:string,d:string,r:string,pv:string,ca:string,i:string,pp:number){
        this.codigo=c;
        this.nombre=n;
        this.descripcion=d;
        this.rubro=r;
        this.precio_de_venta=pv;
        this.cantidad=ca;
        this.iva=i;
        this.precio_prods=pp;
    }



}
