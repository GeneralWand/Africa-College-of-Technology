import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentManagementPageRoutingModule } from './student-management-routing.module';

import { StudentManagementPage } from './student-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentManagementPageRoutingModule
  ],
  declarations: [StudentManagementPage]
})
export class StudentManagementPageModule {}
