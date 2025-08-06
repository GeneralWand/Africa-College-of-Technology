import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerManagementPageRoutingModule } from './lecturer-management-routing.module';

import { LecturerManagementPage } from './lecturer-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerManagementPageRoutingModule
  ],
  declarations: [LecturerManagementPage]
})
export class LecturerManagementPageModule {}
