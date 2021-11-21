import { Component, OnInit } from '@angular/core';
import {ServiciosventasService} from "../../services/serviciosventas.service";
import {Venta} from "../../models/ventas";
import {Producto} from "../../models/producto";
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-ventas-detalle',
  templateUrl: './ventas-detalle.component.html',
  styleUrls: ['./ventas-detalle.component.css']
})
export class VentasDetalleComponent implements OnInit {

  constructor(private servicioVenta: ServiciosventasService, private servicioProducto: ProductosService) { }

  public VentasArray: Venta[] = [
  ];
  public producto: Producto = new Producto();
  public fecha1 : Date = new Date();
  public fecha2 : Date = new Date();
  public ProductosArray: Producto[] = [
  ];

  flitrarProducto(){
    this.VentasArray = this.servicioVenta.filtrarProducto(this.producto)
  }
  filtrarFecha(){
    this.VentasArray = this.servicioVenta.filtrarFecha(this.fecha1, this.fecha2)
  }
  sinFlitrar(){
    this.VentasArray = this.servicioVenta.getVentas()
    this.producto = new Producto();
    this.fecha1 = new Date();
    this.fecha2 = new Date();
  }
  ngOnInit(): void {

    this.VentasArray = this.servicioVenta.getVentas()
    this.ProductosArray = this.servicioProducto.getProductos()
  }

}
