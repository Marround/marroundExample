import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {RXJS_PIPELINE_DATA} from './rxjs-pipeline-data';

@Component({
  selector: 'mar-rxjs-pipeline-example',
  templateUrl: './rxjs-pipeline-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsPipelineExampleComponent {
  rxjsPipelineCode = RXJS_PIPELINE_DATA
}
