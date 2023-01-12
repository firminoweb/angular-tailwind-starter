import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home.routing.module';

import { HomeComponent } from './home.component';

import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LatestCatsModule
  ]
})

export class HomePageModule {}
