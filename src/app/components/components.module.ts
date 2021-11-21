import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProductosComponent} from "./productos/productos.component";
import { ClientesComponent } from './clientes/clientes.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule,} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VentasComponent } from './ventas/ventas.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  declarations: [
    ProductosComponent,
    ClientesComponent,
    VentasComponent
  ],
  exports: [
    ClientesComponent,
    ProductosComponent,
    VentasComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTableModule
  ]
})
export class ComponentsModule {

 
 }
