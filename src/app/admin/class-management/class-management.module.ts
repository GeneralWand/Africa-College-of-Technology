import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassManagementPageRoutingModule } from './class-management-routing.module';

import { ClassManagementPage } from './class-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassManagementPageRoutingModule
  ],
  declarations: [ClassManagementPage]
})
export class ClassManagementPageModule {}
