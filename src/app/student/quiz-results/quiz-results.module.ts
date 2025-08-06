import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizResultsPageRoutingModule } from './quiz-results-routing.module';

import { QuizResultsPage } from './quiz-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizResultsPageRoutingModule
  ],
  declarations: [QuizResultsPage]
})
export class QuizResultsPageModule {}
