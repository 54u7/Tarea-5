import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { IonicModule } from '@ionic/angular';

import { PortadaPageRoutingModule } from './portada-routing.module';

import { PortadaPage } from './portada.page';

@NgModule({

  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortadaPageRoutingModule,
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [PortadaPage]
})
export class PortadaPageModule {}
