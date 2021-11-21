import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/ventas';
import { ServiciosventasService } from 'src/app/services/serviciosventas.service';

@Component({
  selector: 'app-resumenventa',
  templateUrl: './resumenventa.component.html',
  styleUrls: ['./resumenventa.component.css']
})
export class ResumenventaComponent implements OnInit {

  public VentasArray!: Venta[];

  constructor(private ventasservicios: ServiciosventasService) {  }

  ngOnInit(): void {
    this.VentasArray = this.ventasservicios.getVentas();
  }

}
