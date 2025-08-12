import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LecturerRequest } from 'src/app/models/lecturer.model';

@Component({
  selector: 'app-lecturer-approval-modal',
  templateUrl: './lecturer-approval-modal.component.html',
  styleUrls: ['./lecturer-approval-modal.component.scss'],
  standalone: false,
})
export class LecturerApprovalModalComponent implements OnInit {
  @Input() lecturerRequest: LecturerRequest = this.getDefaultRequest();
 approvalForm!: FormGroup;
  availableClasses: string[] = ['Class A', 'Class B', 'Class C', 'Class D'];
  selectedClasses: string[] = [];
  generatedCredentials = {
    username: '',
    password: ''
  };

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {}
  
  ngOnInit() {
    this.initializeForm();
    this.generateCredentials();
  }

  private initializeForm(): void {
    this.approvalForm = this.fb.group({
      name: [this.lecturerRequest?.name || '', Validators.required],
      email: [this.lecturerRequest?.email || '', 
             [Validators.required, Validators.email]],
      phone: [this.lecturerRequest?.phone || '', Validators.required],
      assignedClasses: [[], Validators.required]
    });
  }

  private getDefaultRequest(): LecturerRequest {
    return {
      id: '',
      name: '',
      email: '',
      phone: '',
      requestDate: new Date(),
      status: 'pending'
    };
  }



  generateCredentials() {
    this.generatedCredentials.username = this.lecturerRequest.email.split('@')[0];
    this.generatedCredentials.password = Math.random().toString(36).slice(-8);
  }

  toggleClassSelection(className: string) {
  const index = this.selectedClasses.indexOf(className);
  if (index > -1) {
    this.selectedClasses.splice(index, 1);
  } else {
    this.selectedClasses.push(className);
  }

  // ✅ Update the form control
  this.approvalForm.patchValue({
    assignedClasses: this.selectedClasses
  });
}


  dismiss() {
    this.modalCtrl.dismiss();
  }

  approveLecturer() {
  if (this.approvalForm.valid && this.selectedClasses.length > 0) {
    this.modalCtrl.dismiss({
      request: this.lecturerRequest,
      selectedClasses: this.selectedClasses
    });
  }
}


  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}