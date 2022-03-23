import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mar-kit-card-title',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitCardTitleComponent {}
