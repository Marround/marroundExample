import {RouterModule, Routes} from '@angular/router';
import {DifficultLazyTwoComponent} from './difficult-lazy-two.component';

const routes: Routes = [
  {
    path: '', component: DifficultLazyTwoComponent,
  },
];

export const DifficultLazyTwoRoutes = RouterModule.forChild(routes);
