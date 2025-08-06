import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentManagementPage } from './student-management.page';

const routes: Routes = [
  {
    path: '',
    component: StudentManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentManagementPageRoutingModule {}
