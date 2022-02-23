import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomPage } from './bottom.page';

const routes: Routes = [
  {
    path: '',
    component: BottomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomPageRoutingModule {}
