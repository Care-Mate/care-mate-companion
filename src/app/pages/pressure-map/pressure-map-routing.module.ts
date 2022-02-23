import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressureMapPage } from './pressure-map.page';

const routes: Routes = [
  {
    path: '',
    component: PressureMapPage,
    children: [
      {
        path: 'back',
        loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
      },
      {
        path: 'both',
        loadChildren: () => import('./both/both.module').then( m => m.BothPageModule)
      },
      {
        path: 'bottom',
        loadChildren: () => import('./bottom/bottom.module').then( m => m.BottomPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'both',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressureMapPageRoutingModule {}
