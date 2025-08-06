import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsAnalyticsPageRoutingModule } from './reports-analytics-routing.module';

import { ReportsAnalyticsPage } from './reports-analytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsAnalyticsPageRoutingModule
  ],
  declarations: [ReportsAnalyticsPage]
})
export class ReportsAnalyticsPageModule {}
