import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsmExampleComponent } from './dsm-example.component';
import {HighlightModule} from 'ngx-highlightjs';
import {NzGridModule} from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    DsmExampleComponent
  ],
  exports: [
    DsmExampleComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    NzGridModule
  ]
})
export class DsmExampleModule { }
