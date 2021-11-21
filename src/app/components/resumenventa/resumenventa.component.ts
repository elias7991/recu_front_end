import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Venta } from 'src/app/models/ventas';
import { ClientesService } from 'src/app/services/clientes.service';
import { ServiciosventasService } from 'src/app/services/serviciosventas.service';

@Component({
  selector: 'app-resumenventa',
  templateUrl: './resumenventa.component.html',
  styleUrls: ['./resumenventa.component.css']
})
export class ResumenventaComponent implements OnInit {

  public VentasArray!: Venta[];
  public ClienteArray!: Cliente[];

  constructor(private ventasservicios: ServiciosventasService, private clienteservicios: ClientesService) {  }

  public cliente: Cliente = new Cliente();
  public fecha1 : Date = new Date();
  public fecha2 : Date = new Date();

  flitrarCliente(){
    this.VentasArray = this.ventasservicios.filtrarCliente(this.cliente)
  }
  filtrarFecha(){
    this.VentasArray = this.ventasservicios.filtrarFecha(this.fecha1, this.fecha2)
  }
  sinFlitrar(){
    this.VentasArray = this.ventasservicios.getVentas()
    this.cliente = new Cliente();
    this.fecha1 = new Date();
    this.fecha2 = new Date();
  }

  ngOnInit(): void {
    this.VentasArray = this.ventasservicios.getVentas();
    this.ClienteArray = this.clienteservicios.getClientes();
  }

}
