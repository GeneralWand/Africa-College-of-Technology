import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificationManagementPage } from './certification-management.page';

const routes: Routes = [
  {
    path: '',
    component: CertificationManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificationManagementPageRoutingModule {}
