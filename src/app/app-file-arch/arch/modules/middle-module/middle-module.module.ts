import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleListComponent } from './components/middle-list/middle-list.component';
import { MiddleItemComponent } from './components/middle-item/middle-item.component';
import { MiddleViewComponent } from './components/middle-view/middle-view.component';



@NgModule({
  declarations: [
    MiddleListComponent,
    MiddleItemComponent,
    MiddleViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MiddleModuleModule { }
