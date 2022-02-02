import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mar-middle-view',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
