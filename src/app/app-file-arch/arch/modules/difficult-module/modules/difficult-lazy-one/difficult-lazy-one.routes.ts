import { RouterModule, Routes } from '@angular/router';
import { DifficultLazyOneComponent } from './difficult-lazy-one.component';

const routes: Routes = [
  {
    path: '',
    component: DifficultLazyOneComponent,
  },
];

export const DifficultLazyOneRoutes = RouterModule.forChild(routes);
