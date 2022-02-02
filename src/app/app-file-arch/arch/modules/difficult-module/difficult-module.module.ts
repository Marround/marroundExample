import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultComponent } from './components/difficult/difficult.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    DifficultComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class DifficultModuleModule { }
