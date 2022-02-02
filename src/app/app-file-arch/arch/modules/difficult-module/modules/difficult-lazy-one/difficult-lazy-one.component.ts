import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mar-difficult-lazy-one',
  templateUrl: './difficult-lazy-one.component.html',
  styleUrls: ['./difficult-lazy-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DifficultLazyOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
