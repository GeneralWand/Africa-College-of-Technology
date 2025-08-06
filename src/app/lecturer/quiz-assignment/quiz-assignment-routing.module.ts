import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizAssignmentPage } from './quiz-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: QuizAssignmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizAssignmentPageRoutingModule {}
