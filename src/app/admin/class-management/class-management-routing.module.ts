import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassManagementPage } from './class-management.page';

const routes: Routes = [
  {
    path: '',
    component: ClassManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassManagementPageRoutingModule {}
