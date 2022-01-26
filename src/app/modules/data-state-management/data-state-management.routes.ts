import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataStateManagementComponent} from './data-state-management.component';

export const routes: Routes = [
  {
    path: '',
    component: DataStateManagementComponent,
  },
];

export const DataStateManagementRoutes = RouterModule.forChild(routes);
