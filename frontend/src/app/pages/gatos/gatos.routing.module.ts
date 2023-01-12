import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatosComponent } from './gatos.component';

const routes: Routes = [
  {
    path: '',
    component: GatosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GatosPageRoutingModule {}
