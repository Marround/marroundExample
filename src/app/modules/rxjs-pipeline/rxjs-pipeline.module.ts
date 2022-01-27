import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPipelineComponent } from './rxjs-pipeline.component';
import {RxjsPipelineRoutes} from './rxjs-pipeline.routes';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {YoutubePlayerModule} from '../../shared/modules/youtube-player/youtube-player.module';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import { RxjsPipelineExampleComponent } from './rxjs-pipeline-example/rxjs-pipeline-example.component';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {HighlightModule} from 'ngx-highlightjs';



@NgModule({
  declarations: [
    RxjsPipelineComponent,
    RxjsPipelineExampleComponent,
  ],
  imports: [
    CommonModule,
    RxjsPipelineRoutes,
    NzGridModule,
    YoutubePlayerModule,
    NzCollapseModule,
    NzTypographyModule,
    HighlightModule,
  ],
})
export class RxjsPipelineModule { }
