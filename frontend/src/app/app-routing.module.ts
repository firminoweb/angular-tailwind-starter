import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'breed-list',
    loadChildren: () => import('./pages/breed-list/breed-list.module').then((m) => m.BreedListPageModule),
  },
  {
    path: 'most-searched',
    loadChildren: () => import('./pages/most-searched/most-searched.module').then((m) => m.MostSearchedPageModule),
  },
  {
    path: 'cats/:id',
    loadChildren: () => import('./pages/cats/cats.module').then((m) => m.CatsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
