import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'lista-racas',
    loadChildren: () => import('./pages/lista-racas/lista-racas.module').then((m) => m.ListaRacasPageModule),
  },
  {
    path: 'mais-buscados',
    loadChildren: () => import('./pages/mais-buscados/mais-buscados.module').then((m) => m.MaisBuscadosPageModule),
  },
  {
    path: 'gatos/:id',
    loadChildren: () => import('./pages/gatos/gatos.module').then((m) => m.GatosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
