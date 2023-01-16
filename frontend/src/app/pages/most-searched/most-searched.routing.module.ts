import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostSearchedComponent } from './most-searched.component';

const routes: Routes = [
  {
    path: '',
    component: MostSearchedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MostSearchedPageRoutingModule {}
