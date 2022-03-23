import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import { CustomCardTitleComponent } from './custom-card-title/custom-card-title.component';
import {KitCardModule} from './kit-card/kit-card.module';
import {CardRoutes} from './card.routes';
import { CardExampleComponent } from './card-example/card-example.component';
import {HighlightModule} from 'ngx-highlightjs';
import {NzTypographyModule} from 'ng-zorro-antd/typography';



@NgModule({
  declarations: [
    CardComponent,
    CustomCardTitleComponent,
    CardExampleComponent
  ],
  imports: [
    CommonModule,
    CardRoutes,
    NzGridModule,
    KitCardModule,
    HighlightModule,
    NzTypographyModule
  ]
})
export class CardModule { }
