import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreedListPageRoutingModule } from './breed-list.routing.module';

import { BreedListComponent } from './breed-list.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';

@NgModule({
  declarations: [
    BreedListComponent,
  ],
  imports: [
    CommonModule,
    LatestCatsModule,
    BreedListPageRoutingModule
  ]
})

export class BreedListPageModule {}

