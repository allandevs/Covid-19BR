import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevencaoPageRoutingModule } from './prevencao-routing.module';

import { PrevencaoPage } from './prevencao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevencaoPageRoutingModule
  ],
  declarations: [PrevencaoPage]
})
export class PrevencaoPageModule {}
