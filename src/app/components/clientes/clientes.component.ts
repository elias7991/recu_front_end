import {Component, OnInit, ViewChild} from '@angular/core';
// AQUI IMPORTAMOS LA CLASE CLIENTE
import { Cliente } from "../../models/cliente";
import { MatAccordion } from "@angular/material/expansion";
import { FormControl, Validators } from "@angular/forms";
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteServicios: ClientesService) { }

  ngOnInit(): void {
    this.arrayClientes = this.clienteServicios.getClientes();
  }

  // mataccordion para el panel de expansión de agregar cliente
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  // mataccordion para el panel de expansión de editar cliente
  //@ViewChild(MatAccordion) accordionEdit!: MatAccordion;

  showFiller = false;

  //instanciamos la clase Cliente
  arrayClientes!: Cliente[];


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

  //controles de formulario para el editCliente
  editNombre = new FormControl(
    '',
    [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(3)
    ]
  );
  editRuc = new FormControl('', Validators.required);
  editEmail = new FormControl('', [Validators.required, Validators.email]);

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

  // para mostrar el mensaje de error en el campo de email
  getEditErrorMessage() {
    if(this.editEmail.hasError('required')) {
      return 'Debe ingresar un correo electrónico';
    }

    return this.editEmail.hasError('email') ? 'Correo inválido':'';
  }

  getEditErrorName(){
    return this.editNombre.hasError('required')?'Debe ingresar un nombre':'';
  }

  getEditErrorRuc(){
    return this.editRuc.hasError('required')?'Debe ingresar su ruc':'';
  }

  //funcion encargada de agregar un cliente
  addPersona(ruc: string, nombre: string, email: string){
    if(ruc == "" || nombre == "" || email ==""){
      alert('Ningun campo debe ser nulo');
    }
    else{
      this.clienteServicios.setClientes({ruc: ruc, nombre: nombre, email: email});
      //this.arrayClientes.push({ruc: ruc, nombre: nombre, email: email})
      this.nombre.reset();
      this.ruc.reset();
      this.email.reset();
      alert("Proceso realizado correctamente");
    }
  }

  //funcion encargada de eliminar un cliente
  deletePersona(cliente: Cliente) {
    //this.clienteServicios.deleteCliente(cliente);
    this.arrayClientes.splice(this.arrayClientes.indexOf(cliente),1);
  }


  //funcion encargada de editar una persona
  editPersona(cliente: Cliente) {
    if(this.editRuc.value != ""
      && this.editNombre.value != ""
      && this.editEmail.value != ""){
      if(cliente.nombre==this.editNombre.value
        && cliente.ruc==this.editRuc.value
        && cliente.email==this.editEmail.value) {
        alert('Cuidado, no ha modificado ningún campo.');
      } else {
        this.deletePersona(cliente);
        this.addPersona(this.editRuc.value, this.editNombre.value, this.editEmail.value);
      }
    } else {
      alert('No puede haber campos nulos');
    }
  }

}
