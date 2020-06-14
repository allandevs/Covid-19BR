import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransmisaoPageRoutingModule } from './transmisao-routing.module';

import { TransmisaoPage } from './transmisao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransmisaoPageRoutingModule
  ],
  declarations: [TransmisaoPage]
})
export class TransmisaoPageModule {}
