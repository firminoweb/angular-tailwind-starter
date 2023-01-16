import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsComponent } from './cats.component';
import { CatsPageRoutingModule } from './cats.routing.module';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    CatsComponent,
  ],
  imports: [
    CommonModule,
    CatsPageRoutingModule,
    SwiperModule
  ]
})

export class CatsModule { }
