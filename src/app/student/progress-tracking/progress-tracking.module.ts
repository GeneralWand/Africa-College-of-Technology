import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressTrackingPageRoutingModule } from './progress-tracking-routing.module';

import { ProgressTrackingPage } from './progress-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressTrackingPageRoutingModule
  ],
  declarations: [ProgressTrackingPage]
})
export class ProgressTrackingPageModule {}
