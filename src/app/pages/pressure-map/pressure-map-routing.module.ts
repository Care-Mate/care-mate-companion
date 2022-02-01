import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressureMapPage } from './pressure-map.page';

const routes: Routes = [
  {
    path: '',
    component: PressureMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressureMapPageRoutingModule {}
