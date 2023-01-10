import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRacasComponent } from './lista-racas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaRacasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ListaRacasPageRoutingModule {}
