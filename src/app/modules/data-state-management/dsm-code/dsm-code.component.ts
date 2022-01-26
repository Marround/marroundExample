import { Component } from '@angular/core';
import {CODE} from './data';

@Component({
  selector: 'mar-dsm-code',
  templateUrl: './dsm-code.component.html',
  styleUrls: ['./dsm-code.component.scss'],
})
export class DsmCodeComponent {
  code = CODE
}
