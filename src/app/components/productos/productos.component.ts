import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

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
    if(!this.productosArray.includes(this.selectedProducto)){
      this.productosArray.push(this.selectedProducto);
    }
    this.selectedProducto = new Producto();
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

