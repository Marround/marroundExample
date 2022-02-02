import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultLazyOneComponent } from './difficult-lazy-one.component';
import {DifficultLazyOneRoutes} from './difficult-lazy-one.routes';



@NgModule({
  declarations: [
    DifficultLazyOneComponent
  ],
  imports: [
    CommonModule,
    DifficultLazyOneRoutes
  ]
})
export class DifficultLazyOneModule { }
