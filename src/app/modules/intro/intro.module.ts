import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzTypographyModule} from 'ng-zorro-antd/typography';



@NgModule({
  declarations: [
    IntroComponent,
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzTypographyModule,
  ],
})
export class IntroModule { }
