import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CODE} from './data';

@Component({
  selector: 'mar-dsm-code',
  templateUrl: './dsm-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsmCodeComponent {
  code = CODE;
}
