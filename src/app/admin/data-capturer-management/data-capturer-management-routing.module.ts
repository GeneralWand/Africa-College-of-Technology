import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataCapturerManagementPage } from './data-capturer-management.page';

const routes: Routes = [
  {
    path: '',
    component: DataCapturerManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataCapturerManagementPageRoutingModule {}
