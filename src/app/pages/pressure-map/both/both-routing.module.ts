import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BothPage } from './both.page';

const routes: Routes = [
  {
    path: '',
    component: BothPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BothPageRoutingModule {}
