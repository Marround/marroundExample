import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mar-simple-module',
  templateUrl: './simple-module.component.html',
  styleUrls: ['./simple-module.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleModuleComponent implements OnInit {

  private sss: ISome = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.sss);
  }

}
