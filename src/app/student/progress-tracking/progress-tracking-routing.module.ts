import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressTrackingPage } from './progress-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressTrackingPageRoutingModule {}
