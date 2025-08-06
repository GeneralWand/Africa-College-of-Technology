import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizResultsPage } from './quiz-results.page';

const routes: Routes = [
  {
    path: '',
    component: QuizResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizResultsPageRoutingModule {}
