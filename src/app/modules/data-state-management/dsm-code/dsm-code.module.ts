import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsmCodeComponent } from './dsm-code.component';
import {HighlightModule} from 'ngx-highlightjs';
import {NzHighlightModule} from 'ng-zorro-antd/core/highlight';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {DsmExampleModule} from '../dsm-example/dsm-example.module';



@NgModule({
  declarations: [
    DsmCodeComponent,
  ],
  exports: [
    DsmCodeComponent,
  ],
  imports: [
    CommonModule,
    HighlightModule,
    NzHighlightModule,
    NzGridModule,
    NzTypographyModule,
    DsmExampleModule,
  ],
})
export class DsmCodeModule { }
