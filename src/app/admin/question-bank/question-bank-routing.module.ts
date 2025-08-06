import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionBankPage } from './question-bank.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionBankPageRoutingModule {}
