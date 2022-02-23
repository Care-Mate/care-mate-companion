import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomPageRoutingModule } from './bottom-routing.module';

import { BottomPage } from './bottom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomPageRoutingModule
  ],
  declarations: [BottomPage]
})
export class BottomPageModule {}
