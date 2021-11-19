import { Component, OnInit } from '@angular/core';

import {Producto} from "../../models/producto";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public productosArray: Producto[] = [
    {codigo: 123, nombre: "Tornillo", precio: 12, existencia: 12}
  ]

  selectedProducto: Producto = new Producto();

  addOrEdit(){
    // Variable para control de error
    let error = false;

    //Si el producto no existe, o sea, si no es una edicion
    if(!this.productosArray.includes(this.selectedProducto)){
      //Buscar coincidenciad de código
      for(let product of this.productosArray){
        if(product.codigo == this.selectedProducto.codigo){
          alert("Código de producto en existencia")
          error = true;
        }
      }

      //controlar siempre si ya no existe un error para no presentar varios errores

      if(!error){
        //Buscar coincidenciad de nombre
        for(let product of this.productosArray){
          if(product.nombre == this.selectedProducto.nombre){
            alert("Nombre de producto ya existe")
            error = true;
          }
        }
      }
      if(!error){
        // Error de código
        if(this.selectedProducto.codigo <= 0){
          alert("Código no válido")
          error = true;
        }
      }
      if(!error){
        // Error de nombre
        if(this.selectedProducto.nombre == ''){
          alert("Nombre no válido")
          error = true;
        }
      }
      if(!error){
        // Error de precio
        if(this.selectedProducto.precio <= 0){
          alert("Precio no válido")
          error = true;
        }
      }
      if(!error){
        // Error de cantidad
        if(this.selectedProducto.existencia < 0){
          alert("Cantidad no válida")
          error = true;
        }
      }
      if(!error){
        this.productosArray.push(this.selectedProducto);
      }
    }
    if(!error){
      this.selectedProducto = new Producto();
    }
  }

  openForEdit(producto: Producto){
    this.selectedProducto = producto;
  }

  getArray(){
    return this.productosArray
  }

  delete(producto: Producto){
    if(confirm("Desea eliminar?")){
      this.selectedProducto = producto;
      this.productosArray = this.productosArray.filter(x => x != this.selectedProducto);
      this.selectedProducto = new Producto();
    }
  }

}

