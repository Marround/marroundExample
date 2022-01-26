import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPipelineComponent } from './rxjs-pipeline.component';
import {RxjsPipelineRoutes} from './rxjs-pipeline.routes';
import {NzGridModule} from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    RxjsPipelineComponent,
  ],
    imports: [
        CommonModule,
        RxjsPipelineRoutes,
        NzGridModule,
    ]
})
export class RxjsPipelineModule { }
