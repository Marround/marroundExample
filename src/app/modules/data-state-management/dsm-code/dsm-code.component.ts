import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DSM_CODE} from './dsm-data';

@Component({
  selector: 'mar-dsm-code',
  templateUrl: './dsm-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsmCodeComponent {
  dsmCode = DSM_CODE;
}
