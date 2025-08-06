import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentProgressPageRoutingModule } from './student-progress-routing.module';

import { StudentProgressPage } from './student-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentProgressPageRoutingModule
  ],
  declarations: [StudentProgressPage]
})
export class StudentProgressPageModule {}
