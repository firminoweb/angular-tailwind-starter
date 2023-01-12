import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosComponent } from './gatos.component';
import { GatosPageRoutingModule } from './gatos.routing.module';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    GatosComponent,
  ],
  imports: [
    CommonModule,
    GatosPageRoutingModule,
    SwiperModule
  ]
})

export class GatosModule { }
