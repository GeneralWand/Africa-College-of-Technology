import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsAnalyticsPage } from './reports-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsAnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsAnalyticsPageRoutingModule {}
