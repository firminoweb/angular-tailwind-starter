import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaisBuscadosComponent } from './mais-buscados.component';

const routes: Routes = [
  {
    path: '',
    component: MaisBuscadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MaisBuscadosPageRoutingModule {}
