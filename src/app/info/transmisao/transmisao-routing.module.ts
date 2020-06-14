import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransmisaoPage } from './transmisao.page';

const routes: Routes = [
  {
    path: '',
    component: TransmisaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransmisaoPageRoutingModule {}
