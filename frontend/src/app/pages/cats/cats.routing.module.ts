import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsComponent } from './cats.component';

const routes: Routes = [
  {
    path: '',
    component: CatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CatsPageRoutingModule {}
