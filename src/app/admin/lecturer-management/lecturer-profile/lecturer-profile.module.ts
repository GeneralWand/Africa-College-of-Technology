import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerProfilePageRoutingModule } from './lecturer-profile-routing.module';

import { LecturerProfilePage } from './lecturer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerProfilePageRoutingModule
  ],
  declarations: [LecturerProfilePage]
})
export class LecturerProfilePageModule {}
