import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
  ],
})
export class MainModule { }
