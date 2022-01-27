import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './modules/main/main.component';
import {MainModule} from './modules/main/main.module';
import {IntroComponent} from './modules/intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IntroComponent,
      },
      {
        path: 'data-state-management',
        loadChildren: () => import('./modules/data-state-management/data-state-management.module').then(m => m.DataStateManagementModule),
      },
      {
        path: 'rxjs-pipeline',
        loadChildren: () => import('./modules/rxjs-pipeline/rxjs-pipeline.module').then(m => m.RxjsPipelineModule),
      },
    ],
  },
  {
    path: '*.*',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'}),
    MainModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
