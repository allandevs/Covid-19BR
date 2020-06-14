import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./usu/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'inserir',
    loadChildren: () => import('./usu/inserir/inserir.module').then( m => m.InserirPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./info/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'sintomas',
    loadChildren: () => import('./info/sintomas/sintomas.module').then( m => m.SintomasPageModule)
  },
  {
    path: 'prevencao',
    loadChildren: () => import('./info/prevencao/prevencao.module').then( m => m.PrevencaoPageModule)
  },
  {
    path: 'transmisao',
    loadChildren: () => import('./info/transmisao/transmisao.module').then( m => m.TransmisaoPageModule)
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
