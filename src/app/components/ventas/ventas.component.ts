import { Component, OnInit, ViewChild} from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosService } from 'src/app/services/productos.service';
import { detalleVenta } from 'src/app/models/detalle';
import { Venta } from 'src/app/models/ventas';
import { MatTable } from '@angular/material/table';

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
  public venta!: Venta;
  public detalles!: Array<detalleVenta>;
  public displayedColumns: string[] = ['Producto','Precio', 'Cantidad', 'Total'];
  public totalhastaahora : number = 0;

  constructor(private clientesService : ClientesService, private productosService : ProductosService) { }

  @ViewChild(MatTable) table!: MatTable<Array<detalleVenta>>;

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes();
    this.productos$ = this.productosService.getProductos();
    this.detalle = new detalleVenta();
    this.venta = new Venta();
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
    this.detalle.producto = this.productosService.getProductoByName(this.producto);
    this.detalle.total_detalle = this.detalle.producto.precio * this.detalle.cantidad;
    this.detalles.push({...this.detalle});
    this.calculartotal();
    this.table.renderRows();
    console.log(this.detalles[0].total_detalle);
    this.detalle = new detalleVenta();
    this.producto = "";
    this.clientes$ = this.clientesService.getClientes();
    this.productos$ = this.productosService.getProductos();
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
}
