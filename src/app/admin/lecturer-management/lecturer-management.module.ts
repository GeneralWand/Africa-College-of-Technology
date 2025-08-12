import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerManagementPageRoutingModule } from './lecturer-management-routing.module';

import { LecturerManagementPage } from './lecturer-management.page';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerManagementPageRoutingModule,
    LecturerManagementPage
  ],
 // declarations: [LecturerManagementPage],
  providers: [HttpClient],
})
export class LecturerManagementPageModule {}
