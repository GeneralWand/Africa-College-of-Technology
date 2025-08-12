import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Lecturer } from '../../models/lecturer.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-lecturer-modal',
  templateUrl: './add-lecturer-modal.component.html',
  styleUrls: ['./add-lecturer-modal.component.scss'],
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class AddLecturerModalComponent {
  lecturerForm: FormGroup;
  availableClasses: string[] = ['Class A', 'Class B', 'Class C', 'Class D'];
  selectedClasses: string[] = [];
  isSubmitting = false;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    this.lecturerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]]
    });
  }

  toggleClassSelection(className: string) {
    const index = this.selectedClasses.indexOf(className);
    if (index > -1) {
      this.selectedClasses.splice(index, 1);
    } else {
      this.selectedClasses.push(className);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submit() {
    if (this.lecturerForm.valid && this.selectedClasses.length > 0) {
      this.isSubmitting = true;
      
      // Generate credentials and create complete Lecturer object
      const email = this.lecturerForm.get('email')?.value;
      const lecturer: Lecturer = {
        id: this.generateId(),
        name: this.lecturerForm.get('name')?.value,
        email: email,
        phone: this.lecturerForm.get('phone')?.value,
        assignedClasses: this.selectedClasses,
        credentials: {
          username: email.split('@')[0],  // Generate username from email
          password: this.generatePassword()  // Generate random password
        },
        status: 'active',
        createdAt: new Date()
      };
      
      this.modalCtrl.dismiss(lecturer);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  private generatePassword(): string {
    return Math.random().toString(36).slice(-8);
  }
}