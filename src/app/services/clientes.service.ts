import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  public ClientesArray: Cliente[] = [
    {ruc: "1832131-2", nombre: "Elias Caceres", email: "ejemplo1@ejemplo.com"},
    {ruc: "1234567-1", nombre: "Ever Garay", email: "ejemplo2@ejemplo.com"},
    {ruc: "7654321-3", nombre: "Marcelo Molas", email: "ejemplo3@ejemplo.com"},
    {ruc: "6985346-2", nombre: "Carin Martínez", email: "ejemplo4@ejemplo.com"},
    {ruc: "1435597-2", nombre: "Melani Bazan", email: "ejemplo2@ejemplo.com"},
  ];

  getClientesByName(src : string) {
    return this.ClientesArray.filter(value => value.nombre.includes(src));
  }

  getClienteByName(src : string) {
    return this.ClientesArray.filter(value => value.nombre.includes(src))[0];
  }

  getClientes(){
    return this.ClientesArray;
  }

  setClientes(cliente: Cliente){
    this.ClientesArray.push(cliente)
  }

  deleteCliente(Cliente: Cliente){
    this.ClientesArray = this.ClientesArray.filter(x => x != Cliente);
  }
}
