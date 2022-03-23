import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mar-custom-card-title',
  templateUrl: './custom-card-title.component.html',
  styleUrls: ['./custom-card-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCardTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
