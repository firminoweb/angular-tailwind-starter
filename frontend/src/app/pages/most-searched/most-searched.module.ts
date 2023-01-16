import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MostSearchedPageRoutingModule } from './most-searched.routing.module';

import { MostSearchedComponent } from './most-searched.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  declarations: [
    MostSearchedComponent
  ],
  imports: [
    CommonModule,
    LatestCatsModule,
    MostSearchedPageRoutingModule,
    LoaderModule
  ],
  exports: [
    MostSearchedComponent
  ]
})

export class MostSearchedPageModule {}

