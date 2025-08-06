import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionBankPageRoutingModule } from './question-bank-routing.module';

import { QuestionBankPage } from './question-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionBankPageRoutingModule
  ],
  declarations: [QuestionBankPage]
})
export class QuestionBankPageModule {}
