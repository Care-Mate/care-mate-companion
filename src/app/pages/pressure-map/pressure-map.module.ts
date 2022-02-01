import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PressureMapPageRoutingModule } from './pressure-map-routing.module';

import { PressureMapPage } from './pressure-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PressureMapPageRoutingModule
  ],
  declarations: [PressureMapPage]
})
export class PressureMapPageModule {}
