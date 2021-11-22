import { Component, OnInit } from '@angular/core';
import {Producto} from "../../models/producto";
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
      this.productosArray = this.productosService.getProductos();
  }
  public productosArray: Producto[] = [];
  private edit = false;
  // Producto elegido
  selectedProducto: Producto = new Producto();
  // Copia a mostrar
  newProducto: Producto = new Producto();

  addOrEdit(){
    // Variable para control de error
    let error = false;
    this.productosArray = this.productosArray = this.productosService.getProductos();
    // Copia guardar como elegido
    this.selectedProducto.nombre = this.newProducto.nombre;
    this.selectedProducto.codigo = this.newProducto.codigo;
    this.selectedProducto.precio = this.newProducto.precio;
    this.selectedProducto.existencia = this.newProducto.existencia;

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
        if(this.selectedProducto.codigo! <= 0 || this.selectedProducto.codigo==null){
          alert("Código no válido")
          error = true;
        }
      }
      if(!error){
        // Error de nombre
        if(this.selectedProducto.nombre == '' || this.selectedProducto.nombre==null){
          alert("Nombre no válido")
          error = true;
        }
      }
      if(!error){
        // Error de precio
        if(this.selectedProducto.precio! <= 0 || this.selectedProducto.precio==null){
          alert("Precio no válido")
          error = true;
        }
      }
      if(!error){
        // Error de cantidad
        if(this.selectedProducto.existencia! < 0 || this.selectedProducto.existencia==null){
          alert("Cantidad no válida")
          error = true;
        }
      }
      if(!error){
        this.edit = false;
        this.productosService.setProductos(this.selectedProducto);
        this.productosArray = this.productosService.getProductos();
      }
    }
    if(!error){
      this.selectedProducto = new Producto();
      this.newProducto = new Producto();
    }
  }

  openForEdit(producto: Producto){
    this.newProducto = new Producto();
    this.selectedProducto = producto;

    //copia del seleccionado
    this.newProducto.nombre = this.selectedProducto.nombre;
    this.newProducto.codigo = this.selectedProducto.codigo;
    this.newProducto.precio = this.selectedProducto.precio;
    this.newProducto.existencia = this.selectedProducto.existencia;
  }

  nuevo(){
    // Borrar elegido y copia
    this.selectedProducto = new Producto();
    this.newProducto = new Producto();
  }


  delete(producto: Producto){
    if(confirm("Desea eliminar?")){
      this.selectedProducto = producto;
      this.productosService.deleteProducto(this.selectedProducto);
      this.productosArray = this.productosService.getProductos();
      this.selectedProducto = new Producto();
    }
  }

}

