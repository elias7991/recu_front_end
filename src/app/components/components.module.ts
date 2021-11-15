/*EN ESTE MODULO VAN A AGREGAR SUS COMPONENTES*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  exports: [
    ClientesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
