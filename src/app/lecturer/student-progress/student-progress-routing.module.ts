import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentProgressPage } from './student-progress.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentProgressPageRoutingModule {}
