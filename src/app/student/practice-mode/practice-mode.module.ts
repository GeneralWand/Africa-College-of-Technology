import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeModePageRoutingModule } from './practice-mode-routing.module';

import { PracticeModePage } from './practice-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeModePageRoutingModule
  ],
  declarations: [PracticeModePage]
})
export class PracticeModePageModule {}
