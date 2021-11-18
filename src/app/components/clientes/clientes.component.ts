import { Component, OnInit } from '@angular/core';
// AQUI IMPORTAMOS LA CLASE CLIENTE
import {Cliente} from "../../models/cliente";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //instanciamos la clase Cliente
  arrayClientes: Cliente[] = [
    {ruc: "1832131-2", nombre: "Elias Caceres", email: "ejemplo1@ejemplo.com"},
    {ruc: "1234567-1", nombre: "Ever Garay", email: "ejemplo2@ejemplo.com"},
    {ruc: "7654321-3", nombre: "Marcelo Molas", email: "ejemplo3@ejemplo.com"},
    {ruc: "6985346-2", nombre: "Carin Martínez", email: "ejemplo4@ejemplo.com"},
    {ruc: "1435597-2", nombre: "Melani Bazan", email: "ejemplo2@ejemplo.com"},
  ];

}
