import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mar-middle-list',
  templateUrl: './middle-list.component.html',
  styleUrls: ['./middle-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
