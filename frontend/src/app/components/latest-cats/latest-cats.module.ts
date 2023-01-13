import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestCatsComponent } from './latest-cats.component';

import { RouterModule } from '@angular/router';

import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    LatestCatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoaderModule
  ],
  exports: [
    LatestCatsComponent
  ]
})
export class LatestCatsModule { }
