import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificationManagementPageRoutingModule } from './certification-management-routing.module';

import { CertificationManagementPage } from './certification-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificationManagementPageRoutingModule
  ],
  declarations: [CertificationManagementPage]
})
export class CertificationManagementPageModule {}
