import {RouterModule, Routes} from '@angular/router';
import {RxjsPipelineComponent} from './rxjs-pipeline.component';

export const routes: Routes = [
  {
    path: '',
    component: RxjsPipelineComponent,
  },
];

export const RxjsPipelineRoutes = RouterModule.forChild(routes);
