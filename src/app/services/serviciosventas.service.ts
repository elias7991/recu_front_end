import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { detalleVenta } from '../models/detalle';
import { Venta } from '../models/ventas';

@Injectable({
  providedIn: 'root'
})
export class ServiciosventasService {

  constructor() { }

  public VentasArray: Venta[] = [
    {id: 1, fecha: new Date("2019-01-16"), factura_num: "1", cliente: {ruc: "1832131-2", nombre: "Elias Caceres",email : "ejemplo1@ejemplo.com"}, detalles : [{id:1, producto:{codigo: 123, nombre: "Tornillo", precio: 1200, existencia: 1212}, cantidad: 1, total_detalle: 1200}], total: 1200 }
  ];


    getVentas(){
      return this.VentasArray.sort(function(a: Venta, b: Venta) {
        return a.id - b.id;
      });
    }

    setVentas(Venta: Venta){
      this.VentasArray.push(Venta)
    }

    deleteVenta(Venta: Venta){
      this.VentasArray = this.VentasArray.filter(x => x != Venta);
    }
}
