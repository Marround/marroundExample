import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStateManagementComponent } from './data-state-management.component';
import {DataStateManagementRoutes} from './data-state-management.routes';
import {DsmCodeModule} from './dsm-code/dsm-code.module';
import {NzGridModule} from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    DataStateManagementComponent,
  ],
  imports: [
    CommonModule,
    DataStateManagementRoutes,
    DsmCodeModule,
    NzGridModule,
  ],
})
export class DataStateManagementModule {
  public static injector: Injector;

  constructor(injector: Injector) {
    DataStateManagementModule.injector = injector;
  }
}
