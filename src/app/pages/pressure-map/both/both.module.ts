import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BothPageRoutingModule } from './both-routing.module';

import { BothPage } from './both.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BothPageRoutingModule
  ],
  declarations: [BothPage]
})
export class BothPageModule {}
