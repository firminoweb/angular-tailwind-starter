import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestCatsComponent } from './latest-cats.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LatestCatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LatestCatsComponent
  ]
})
export class LatestCatsModule { }
