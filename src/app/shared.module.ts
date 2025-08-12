import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LecturerApprovalModalComponent } from 'src/app/Components/lecturer-approval-modal/lecturer-approval-modal.component';




@NgModule({
   declarations: [LecturerApprovalModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [LecturerApprovalModalComponent, CommonModule,
    IonicModule]
})
export class SharedModule { }
