import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pressure-map',
    pathMatch: 'full'
  },
  {
    path: 'pressure-map',
    loadChildren: () => import('./pages/pressure-map/pressure-map.module').then( m => m.PressureMapPageModule)
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('./pages/bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  },
  {
    path: 'calibrate',
    loadChildren: () => import('./pages/calibrate/calibrate.module').then( m => m.CalibratePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
