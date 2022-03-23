import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CARD_DATA} from './card-data';

@Component({
  selector: 'mar-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardExampleComponent {
  readonly cardCode = CARD_DATA;
}
