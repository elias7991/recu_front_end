import {Injectable} from '@angular/core';
import {Producto} from "../models/producto";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() { }

  public productosArray: Producto[] = [
    {codigo: 123, nombre: "Tornillo", precio: 1200, existencia: 1212},
    {codigo: 122, nombre: "Tuerca", precio: 1000, existencia: 1223},
    {codigo: 121, nombre: "Alambre", precio: 5000, existencia: 120},
  ];


    getProductos(){
      return this.productosArray.sort(function(a: Producto, b: Producto) {
        return a.codigo! - b.codigo!;
      });
    }

    setProductos(producto: Producto){
      this.productosArray.push(producto)
    }

    deleteProducto(producto: Producto){
      this.productosArray = this.productosArray.filter(x => x != producto);
    }

    getProductosByName(src : string) {
      return this.productosArray.filter(value => value.nombre!.includes(src));
    }

    getProductoByName(src : string) {
      return this.productosArray.filter(value => value.nombre!.includes(src))[0];
    }

}
