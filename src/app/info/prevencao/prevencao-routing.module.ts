import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevencaoPage } from './prevencao.page';

const routes: Routes = [
  {
    path: '',
    component: PrevencaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevencaoPageRoutingModule {}
