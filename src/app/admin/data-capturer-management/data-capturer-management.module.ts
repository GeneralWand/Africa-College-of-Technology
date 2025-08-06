import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataCapturerManagementPageRoutingModule } from './data-capturer-management-routing.module';

import { DataCapturerManagementPage } from './data-capturer-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataCapturerManagementPageRoutingModule
  ],
  declarations: [DataCapturerManagementPage]
})
export class DataCapturerManagementPageModule {}
