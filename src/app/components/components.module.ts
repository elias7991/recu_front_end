import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductosComponent} from "./productos/productos.component";
import { ClientesComponent } from './clientes/clientes.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { VentasComponent } from './ventas/ventas.component';
import { ResumenventaComponent } from './resumenventa/resumenventa.component'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import { VentasDetalleComponent } from './ventas-detalle/ventas-detalle.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    ProductosComponent,
    ClientesComponent,
    VentasComponent,
    ResumenventaComponent,
    VentasDetalleComponent
  ],
  exports: [
    ClientesComponent,
    ProductosComponent,
    VentasComponent,
    ResumenventaComponent,
    VentasDetalleComponent
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
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule
  ]
})
export class ComponentsModule {


 }
