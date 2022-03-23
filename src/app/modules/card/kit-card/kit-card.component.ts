import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'mar-kit-card',
  templateUrl: './kit-card.component.html',
  styleUrls: ['./kit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitCardComponent {
  @Input() title?: string;
}
