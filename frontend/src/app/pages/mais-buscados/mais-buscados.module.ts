import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaisBuscadosPageRoutingModule } from './mais-buscados.routing.module';

import { MaisBuscadosComponent } from './mais-buscados.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';

@NgModule({
  declarations: [
    MaisBuscadosComponent,
  ],
  imports: [
    CommonModule,
    LatestCatsModule,
    MaisBuscadosPageRoutingModule
  ]
})

export class MaisBuscadosPageModule {}

