import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitCardComponent } from './kit-card.component';
import { KitCardTitleComponent } from './kit-card-title/kit-card-title.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [KitCardComponent, KitCardTitleComponent],
  exports: [KitCardComponent, KitCardTitleComponent],
  imports: [CommonModule, NzGridModule],
})
export class KitCardModule {}
