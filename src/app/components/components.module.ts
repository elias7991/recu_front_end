import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ProductosComponent} from "./productos/productos.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ProductosComponent,
  ],
  exports: [
    ProductosComponent,
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
  ]
})
export class ComponentsModule { }
