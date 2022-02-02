import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mar-middle-item',
  templateUrl: './middle-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
