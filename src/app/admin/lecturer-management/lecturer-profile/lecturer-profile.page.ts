import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LecturerService } from 'src/app/services/admin/lecturer.service';
import { ToastController } from '@ionic/angular';

interface Activity {
  type: string;
  description: string;
  date: Date;
  initiator?: string;
}

@Component({
  selector: 'app-lecturer-profile',
  templateUrl: './lecturer-profile.page.html',
  styleUrls: ['./lecturer-profile.page.scss'],
  standalone: false,
})
export class LecturerProfilePage implements OnInit {
  lecturer: any = null;
  isLoading = true;
  error: string | null = null;
  activities: Activity[] = [];
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lecturerService: LecturerService,
    private toastCtrl: ToastController,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadLecturerProfile();
  }

  loadLecturerProfile() {
    const id = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.error = null;

    if (!id) {
      this.handleError('No lecturer ID provided');
      return;
    }

    this.lecturerService.getLecturerById(id).subscribe({
      next: (lecturer) => {
        this.lecturer = lecturer;
        this.loadActivities(lecturer.id);
        this.isLoading = false;
        this.changeDetector.detectChanges();
      },
      error: (err) => {
        this.handleError(err.message || 'Failed to load lecturer data');
      }
    });
  }

  loadActivities(lecturerId: string) {
  // In a real app, you would fetch this from your API
  // This is mock data for demonstration
  this.activities = [
    {
      type: 'password-reset',
      description: 'Password was reset by Admin',
      date: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      initiator: 'Admin User'
    },
    {
      type: 'assignment',
      description: 'Submitted grades for CS101 Midterm',
      date: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
    },
    {
      type: 'login',
      description: 'Logged in to the system',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
    },
    {
      type: 'profile',
      description: 'Updated contact information',
      date: new Date(Date.now() - 1000 * 60 * 60 * 48) // 2 days ago
    },
    {
      type: 'status-change',
      description: 'Account status changed to active',
      date: new Date(Date.now() - 1000 * 60 * 60 * 72) // 3 days ago
    }
  ];
}

  getInitials(name: string): string {
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  getActivityIcon(type: string): string {
  switch(type) {
    case 'assignment': return 'document-text';
    case 'login': return 'log-in';
    case 'profile': return 'person-circle';
    case 'password-reset': return 'refresh-circle';
    case 'status-change': return 'toggle';
    default: return 'notifications';
  }
}

getActivityColor(type: string): string {
  switch(type) {
    case 'assignment': return 'primary';
    case 'login': return 'success';
    case 'profile': return 'warning';
    case 'password-reset': return 'danger';
    case 'status-change': return 'tertiary';
    default: return 'medium';
  }
}

  refreshProfile() {
    this.loadLecturerProfile();
  }

  private handleError(message: string) {
    this.error = message;
    this.isLoading = false;
    this.presentToast(message, 'danger');
    this.changeDetector.detectChanges();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position: 'top'
    });
    await toast.present();
  }

  navigateBack() {
    this.router.navigate(['/lecturer-management']);
  }
  async resetPassword() {
  if (!this.lecturer?.id) return;

  const confirm = await this.presentConfirmReset();
  if (!confirm) return;

  this.lecturerService.resetPassword(this.lecturer.id).subscribe({
    next: (newPassword) => {
      // Add to activity feed
      this.activities.unshift({
        type: 'password-reset',
        description: 'Password was reset by Admin',
        date: new Date(),
        initiator: 'You' // Or get current admin name
      });
      
      this.presentToast(`Password reset successful. New password: ${newPassword}`, 'success');
    },
    error: (err) => {
      this.presentToast('Failed to reset password', 'danger');
    }
  });
}

private async presentConfirmReset(): Promise<boolean> {
  return new Promise(async (resolve) => {
    const alert = await this.toastCtrl.create({
      header: 'Confirm Reset',
      message: 'Are you sure you want to reset this lecturer\'s password?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => resolve(false)
        },
        {
          text: 'Reset',
          handler: () => resolve(true)
        }
      ]
    });
    await alert.present();
  });
}
}