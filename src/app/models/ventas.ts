import { Cliente } from "./cliente";
import { detalleVenta } from "./detalle";

export class Venta {
    id! : number;
    fecha! : Date;
    factura_num! : string;
    cliente! : Cliente;
    detalles : Array<detalleVenta> = [];
    total = 0;
/*
    constructor(id: number, fecha: Date, factura_num : string, cliente: Cliente, detalles : Array<detalleVenta>, total: number) {
        this.id = id;
        this.fecha = fecha;
        this.factura_num = factura_num;
        this.cliente = cliente;
        this.detalles = detalles;
        this.total = total;
    }*/
}
