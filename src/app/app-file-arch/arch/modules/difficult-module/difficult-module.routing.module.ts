import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DifficultComponent} from './components/difficult/difficult.component';

const routes: Routes = [
  {
    path: '**',
    component: DifficultComponent,
    children: [
      {
        path: 'one',
        loadChildren: () => import('./modules/difficult-lazy-one/difficult-lazy-one.module').then(m => m.DifficultLazyOneModule)
      },
      {
        path: 'two',
        loadChildren: () => import('./modules/difficult-lazy-two/difficult-lazy-two.module').then(m => m.DifficultLazyTwoModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlpRoutingModule {}
