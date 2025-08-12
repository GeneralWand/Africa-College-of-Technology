import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AddLecturerModalComponent } from 'src/app/Components/add-lecturer-modal/add-lecturer-modal.component';
import { LecturerService } from 'src/app/services/admin/lecturer.service';
import { EmailService } from 'src/app/services/email.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Lecturer, LecturerRequest } from 'src/app/models/lecturer.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';


@Component({
  selector: 'app-lecturer-management',
  templateUrl: './lecturer-management.page.html',
  styleUrls: ['./lecturer-management.page.scss'],
  //standalone: false,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, SharedModule] 
})
export class LecturerManagementPage implements OnInit {
   lecturerRequests: any[] = [];
  lecturers: any[] = [];
  isLoading = false;
  

  constructor(
    private modalCtrl: ModalController,
    private lecturerService: LecturerService,
    private emailService: EmailService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loadLecturers();
  }

  loadLecturers(event?: any) {
    this.isLoading = true;
    this.lecturerService.getLecturerRequests().subscribe({
      next: (requests) => {
        this.lecturerRequests = requests;
        this.isLoading = false;
        if (event) event.target.complete();
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        if (event) event.target.complete();
      }
    });
  }
  async openAddLecturerModal() {
    const modal = await this.modalCtrl.create({
      component: AddLecturerModalComponent,
      cssClass: 'auto-height-modal',
      backdropDismiss: false
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.addLecturer(data);
    }
  }

  addLecturer(lecturerData: Lecturer) {
  this.lecturerService.addLecturer(lecturerData).subscribe({
    next: (newLecturer: Lecturer) => {
      this.lecturers.push(newLecturer);
      this.presentToast('Lecturer added successfully!', 'success');
      this.navigateToSendCredentials(newLecturer);
    },
    error: (err) => {
      console.error(err);
      this.presentToast('Failed to add lecturer', 'danger');
    }
  });
}
  navigateToSendCredentials(lecturer: any) {
    this.router.navigate(['/send-credentials'], {
      state: { lecturer }
    });
  }
  suspendLecturer(lecturerId: string) {
  this.lecturerService.suspendLecturer(lecturerId).subscribe({
    next: () => {
      const lecturer = this.lecturers.find(l => l.id === lecturerId);
      if (lecturer) {
        lecturer.status = 'suspended';
      }
      this.presentToast('Lecturer suspended successfully', 'success');
    },
    error: (err) => {
      console.error('Error suspending lecturer:', err);
      this.presentToast('Failed to suspend lecturer', 'danger');
    }
  });
}
viewProfile(lecturer: Lecturer | LecturerRequest) {
    console.log('Viewing profile for:', lecturer);
    if (!lecturer.id) {
      this.presentToast('Lecturer ID is missing', 'danger');
      return;
    }
    this.router.navigate(['/lecturer-profile', lecturer.id]);
  }
toggleLecturerStatus(lecturer: Lecturer) {
  if (lecturer.status === 'active') {
    this.lecturerService.suspendLecturer(lecturer.id);
  } else {
    this.lecturerService.reactivateLecturer(lecturer.id);
  }

  this.loadLecturers(); // Reload UI
}



viewBilling(lecturer: Lecturer) {
  // Replace with navigation or modal
  console.log('Viewing billing for:', lecturer);
}
resetPassword(lecturer: Lecturer) {
  this.lecturerService.resetPassword(lecturer.id).subscribe({
    next: (newPassword) => {
      this.presentToast(`Password reset to: ${newPassword}`, 'success');
      this.navigateToSendCredentials({
        ...lecturer,
        tempPassword: newPassword
      });
    },
    error: (err) => {
      console.error('Error resetting password:', err);
      this.presentToast('Failed to reset password', 'danger');
    }
  });
}
refreshLecturers() {
  this.loadLecturers(); // Simply call your existing load method
}
async openLecturerApprovalModal(lecturer: LecturerRequest) {
  try {
    const { LecturerApprovalModalComponent } = await import(
      'src/app/Components/lecturer-approval-modal/lecturer-approval-modal.component'
    );

    const modal = await this.modalCtrl.create({
      component: LecturerApprovalModalComponent,
      componentProps: { lecturerRequest: lecturer },
      cssClass: 'approval-modal'
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data?.request && data?.selectedClasses) {
      await this.lecturerService
        .approveRequest(data.request, data.selectedClasses)
        .toPromise();

      await this.loadLecturers();
      this.presentToast('Lecturer approved and email credentials is sent successfully', 'success');
    }
  } catch (error) {
    console.error('Approval error:', error);
    this.presentToast('Error approving lecturer', 'danger');
  }
}

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position: 'top',
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
  

  toggleStatus(lecturer: Lecturer) {
    this.lecturerService.toggleStatus(lecturer.id).subscribe(() => {
      this.loadLecturers();
    });
  }

  

  
}
'src/app/Components/lecturer-approval-modal/lecturer-approval-modal.component'