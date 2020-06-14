import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirPage } from './inserir.page';

const routes: Routes = [
  {
    path: '',
    component: InserirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirPageRoutingModule {}
