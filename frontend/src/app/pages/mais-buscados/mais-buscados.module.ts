import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaisBuscadosPageRoutingModule } from './mais-buscados.routing.module';

import { MaisBuscadosComponent } from './mais-buscados.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  declarations: [
    MaisBuscadosComponent
  ],
  imports: [
    CommonModule,
    LatestCatsModule,
    MaisBuscadosPageRoutingModule,
    LoaderModule
  ],
  exports: [
    MaisBuscadosComponent
  ]
})

export class MaisBuscadosPageModule {}

