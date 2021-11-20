import {Component, OnInit, ViewChild} from '@angular/core';
// AQUI IMPORTAMOS LA CLASE CLIENTE
import { Cliente } from "../../models/cliente";
import { MatAccordion } from "@angular/material/expansion";
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // mataccordion para el panel de expansión de agregar cliente
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  // mataccordion para el panel de expansión de editar cliente
  //@ViewChild(MatAccordion) accordionEdit!: MatAccordion;

  showFiller = false;

  //instanciamos la clase Cliente
  arrayClientes: Cliente[] = [
    {ruc: "1832131-2", nombre: "Elias Cáceres", email: "ejemplo1@ejemplo.com"},
    {ruc: "1234567-1", nombre: "Ever Garay", email: "ejemplo2@ejemplo.com"},
    {ruc: "7654321-3", nombre: "Marcelo Molas", email: "ejemplo3@ejemplo.com"},
    {ruc: "6985346-2", nombre: "Carin Martínez", email: "ejemplo4@ejemplo.com"},
    {ruc: "1435597-2", nombre: "Melani Bazan", email: "ejemplo2@ejemplo.com"},
  ];


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  nombre = new FormControl(
    '',
    [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(3)
    ]
  );

  ruc = new FormControl('', Validators.required);


  // FormControl del campo email
  email = new FormControl('', [Validators.required, Validators.email]);
  // para mostrar el mensaje de error en el campo de email
  getErrorMessage() {
    if(this.email.hasError('required')) {
      return 'Debe ingresar un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo inválido':'';
  }

  getErrorName(){
    return this.nombre.hasError('required')?'Debe ingresar un nombre':'';
  }

  getErrorRuc(){
    return this.ruc.hasError('required')?'Debe ingresar su ruc':'';
  }

  //funcion encargada de agregar un cliente
  addPersona(ruc: string, nombre: string, email: string){
    this.arrayClientes.push({ruc: ruc, nombre: nombre, email: email});
    this.nombre.reset();
    this.ruc.reset();
    this.email.reset();
  }

  //funcion encargada de eliminar un cliente
  deletePersona(cliente: Cliente) {
    this.arrayClientes.splice(this.arrayClientes.indexOf(cliente),1);
  }


  //funcion encargada de editar una persona
  editPersona(cliente: Cliente) {
    this.deletePersona(cliente);
    this.addPersona(cliente.ruc, cliente.nombre, cliente.email)
  }

}
