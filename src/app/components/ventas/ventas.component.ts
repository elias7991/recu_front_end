import { Component, OnInit, ViewChild} from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosService } from 'src/app/services/productos.service';
import { detalleVenta } from 'src/app/models/detalle';
import { Venta } from 'src/app/models/ventas';
import { MatTable } from '@angular/material/table';
import { ServiciosventasService } from 'src/app/services/serviciosventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public cliente: string="";
  public clientes$: any;
  public producto: string=""
  public productos$:any;
  public detalle!: detalleVenta;
  public detalles!: Array<detalleVenta>;
  public displayedColumns: string[] = ['Producto','Precio', 'Cantidad', 'Total'];
  public totalhastaahora : number = 0;

  constructor(private clientesService : ClientesService, private productosService : ProductosService, private ventasService: ServiciosventasService) { }

  @ViewChild(MatTable) table!: MatTable<Array<detalleVenta>>;

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes();
    this.productos$ = this.productosService.getProductos();
    this.detalle = new detalleVenta();
    this.detalles = [];
  }


  //instanciamos la clase Cliente
  searchcliente(value: any): any{
    console.log(this.cliente);
    this.clientes$ = this.clientesService.getClientesByName(this.cliente);
  }

  searchproducto(value: any): any{
    console.log(this.detalle.producto);
    this.productos$ = this.productosService.getProductosByName(this.producto);
  }

  

  submit(){
    if(this.cliente == "" || this.producto == "" || this.detalle.cantidad == undefined){
      alert("No se debe dejar campos vacios!!!!");
    }
    else{
      //obtener producto con el string
      this.detalle.producto = this.productosService.getProductoByName(this.producto);
      //calcular total del detalle
      this.detalle.total_detalle = this.detalle.producto.precio! * this.detalle.cantidad;
      //cargar en el array de detalles
      this.detalles.push({...this.detalle});
      //calcula el total hasta ahora
      this.calculartotal();
      //renderiza de nuevo la tabla de detalles
      try{
        this.table.renderRows();
      }catch(e){
        console.log(e);
      }
      //cerear los ng models
      this.detalle = new detalleVenta();
      this.producto = "";
      this.clientes$ = this.clientesService.getClientes();
      this.productos$ = this.productosService.getProductos();
    }
  }

  calculartotal(){
    var total : number = 0;
    for(var i = 0; i<this.detalles.length ; i++){
      total += this.detalles[i].total_detalle;
    }
    this.totalhastaahora = total;
  }
  
  limpiar(){
    this.detalle = new detalleVenta();
    this.producto = "";
    this.clientes$ = this.clientesService.getClientes();
    this.productos$ = this.productosService.getProductos();
  }

  detallesvacios(){
    return this.detalles.length != 0;
  }

  comprar(){
    var venta : Venta;
    if(this.cliente = ""){
      alert("Debe seleccionarse un cliente!!");
    }else{
      var cliente = this.clientesService.getClienteByName(this.cliente);
      var id = Math.round(Math.random()*100000);
      venta = {id : id, fecha: new Date(Date.now()), cliente: cliente,detalles:this.detalles, total: this.totalhastaahora,factura_num: (Math.random() * 999999+100000).toFixed(0)}
      this.ventasService.setVentas({...venta});
      alert("Venta realizada!!!!!!!");
      this.detalles = [];
      this.cliente = "";
      this.table.renderRows();
      this.totalhastaahora = 0;
      console.log(this.ventasService.getVentas());
    }
  }

  limpiarcanasta(){
    this.detalles = [];
    this.table.renderRows();
    this.totalhastaahora = 0;
  }

  borrarDetalle(id : number){
    this.detalles = this.detalles.filter((detalle) => detalle.id != id);
  }
}

  

