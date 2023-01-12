import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListaRacasPageRoutingModule } from './lista-racas.routing.module';

import { ListaRacasComponent } from './lista-racas.component';
// import { LatestCatsComponent } from 'src/app/components/latest-cats/latest-cats.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';

@NgModule({
  declarations: [
    ListaRacasComponent,
  ],
  imports: [
    CommonModule,
    LatestCatsModule,
    ListaRacasPageRoutingModule
  ],
  // exports: [
  //   LatestCatsComponent
  // ]
})

export class ListaRacasPageModule {}

