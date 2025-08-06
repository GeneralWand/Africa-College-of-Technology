import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizAssignmentPageRoutingModule } from './quiz-assignment-routing.module';

import { QuizAssignmentPage } from './quiz-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizAssignmentPageRoutingModule
  ],
  declarations: [QuizAssignmentPage]
})
export class QuizAssignmentPageModule {}
