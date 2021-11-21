import { Producto } from "./producto";

export class detalleVenta {
    id! : number;
    producto! : Producto;
    cantidad! : number;
    total_detalle! : number; 
/*
    constructor(id: number, producto: Producto, cantidad:number, total_detalle:number){
        this.id=id;
        this.producto = producto;
        this.cantidad = cantidad;
        this.total_detalle = total_detalle;
    }*/

    
}