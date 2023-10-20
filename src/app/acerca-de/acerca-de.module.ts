import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaDePageRoutingModule } from './acerca-de-routing.module';

import { AcercaDePage } from './acerca-de.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaDePageRoutingModule
  ],
  declarations: [AcercaDePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcercaDePageModule {}
