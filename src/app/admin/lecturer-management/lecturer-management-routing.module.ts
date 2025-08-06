import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerManagementPage } from './lecturer-management.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerManagementPageRoutingModule {}
