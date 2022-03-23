import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from './card.component';

export const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
];

export const CardRoutes = RouterModule.forChild(routes);
