import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPipelineComponent } from './rxjs-pipeline.component';
import {RxjsPipelineRoutes} from './rxjs-pipeline.routes';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {YoutubePlayerModule} from '../../shared/modules/youtube-player/youtube-player.module';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';



@NgModule({
  declarations: [
    RxjsPipelineComponent,
  ],
  imports: [
    CommonModule,
    RxjsPipelineRoutes,
    NzGridModule,
    YoutubePlayerModule,
    NzCollapseModule,
  ],
})
export class RxjsPipelineModule { }
