import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { async } from 'rxjs';


interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  classId: string;
  status: 'active' | 'inactive' | 'pending';
  enrolledDate: Date;
  lastLogin?: Date;
  selected?: boolean;
  credentials?: {
    username: string;
    password: string;
  };
}

interface Class {
  id: string;
  name: string;
  certification: string;
  lecturerId: string;
  lecturerName: string;
  maxStudents: number;
  currentStudents: number;
  pricePerStudent: number;
}

interface Lecturer {
  id: string;
  name: string;
  email: string;
  totalStudents: number;
  activeClasses: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
  // Data Properties
  students: Student[] = [];
  filteredStudents: Student[] = [];
  paginatedStudents: Student[] = [];
  classes: Class[] = [];
  lecturers: Lecturer[] = [];
  
  // UI State
  showAddStudentModal = false;
  showBulkUploadModal = false;
  searchTerm = '';
  selectedClass = '';
  selectedStatus = '';
  selectedStudents: string[] = [];
  selectAll = false;
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  
  // Forms
  newStudent: Partial<Student> & { sendCredentials?: boolean } = {
    sendCredentials: true
  };
  
  // Bulk Upload
  selectedFile: File | null = null;
  bulkUploadClassId = '';
  emailCredentialsAfterUpload = true;
  
  // Utility
  Math = Math;

  constructor(private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController) {
  }

 ngOnInit() {
    this.loadHardcodedData();
    this.filterStudents();
  }

  // Data Loading
  loadHardcodedData() {
    // Hardcoded Classes
    this.classes = [
      {
        id: 'cls001',
        name: 'CompTIA A+ Fundamentals',
        certification: 'CompTIA A+',
        lecturerId: 'lec001',
        lecturerName: 'Mr. John Smith',
        maxStudents: 30,
        currentStudents: 25,
        pricePerStudent: 250
      },
      {
        id: 'cls002',
        name: 'AWS Solutions Architect',
        certification: 'AWS SAA-C03',
        lecturerId: 'lec002',
        lecturerName: 'Dr. Sarah Johnson',
        maxStudents: 20,
        currentStudents: 18,
        pricePerStudent: 500
      },
      {
        id: 'cls003',
        name: 'CCNA Networking',
        certification: 'Cisco CCNA',
        lecturerId: 'lec001',
        lecturerName: 'Mr. John Smith',
        maxStudents: 25,
        currentStudents: 22,
        pricePerStudent: 400
      },
      {
        id: 'cls004',
        name: 'Security+ Bootcamp',
        certification: 'CompTIA Security+',
        lecturerId: 'lec003',
        lecturerName: 'Ms. Lisa Chen',
        maxStudents: 35,
        currentStudents: 30,
        pricePerStudent: 350
      }
    ];

    // Hardcoded Lecturers
    this.lecturers = [
      {
        id: 'lec001',
        name: 'Mr. John Smith',
        email: 'john.smith@example.com',
        totalStudents: 47,
        activeClasses: 2
      },
      {
        id: 'lec002',
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@example.com',
        totalStudents: 18,
        activeClasses: 1
      },
      {
        id: 'lec003',
        name: 'Ms. Lisa Chen',
        email: 'lisa.chen@example.com',
        totalStudents: 30,
        activeClasses: 1
      }
    ];

    // Hardcoded Students
    this.students = [
      {
        id: 'std001',
        firstName: 'Thabo',
        lastName: 'Mthembu',
        email: 'thabo.mthembu@email.com',
        phone: '+27 82 123 4567',
        classId: 'cls001',
        status: 'active',
        enrolledDate: new Date('2024-01-15'),
        lastLogin: new Date('2024-02-01'),
        credentials: { username: 'thabo.mthembu', password: 'TM2024!@#' }
      },
      {
        id: 'std002',
        firstName: 'Nomsa',
        lastName: 'Dlamini',
        email: 'nomsa.dlamini@email.com',
        phone: '+27 83 234 5678',
        classId: 'cls001',
        status: 'active',
        enrolledDate: new Date('2024-01-18'),
        lastLogin: new Date('2024-01-30'),
        credentials: { username: 'nomsa.dlamini', password: 'ND2024!@#' }
      },
      {
        id: 'std003',
        firstName: 'Sipho',
        lastName: 'Ndlovu',
        email: 'sipho.ndlovu@email.com',
        phone: '+27 84 345 6789',
        classId: 'cls002',
        status: 'active',
        enrolledDate: new Date('2024-01-20'),
        lastLogin: new Date('2024-02-02'),
        credentials: { username: 'sipho.ndlovu', password: 'SN2024!@#' }
      },
      {
        id: 'std004',
        firstName: 'Zanele',
        lastName: 'Khumalo',
        email: 'zanele.khumalo@email.com',
        phone: '+27 85 456 7890',
        classId: 'cls002',
        status: 'pending',
        enrolledDate: new Date('2024-02-01'),
        credentials: { username: 'zanele.khumalo', password: 'ZK2024!@#' }
      },
      {
        id: 'std005',
        firstName: 'Mandla',
        lastName: 'Sibiya',
        email: 'mandla.sibiya@email.com',
        phone: '+27 86 567 8901',
        classId: 'cls003',
        status: 'active',
        enrolledDate: new Date('2024-01-25'),
        lastLogin: new Date('2024-01-28'),
        credentials: { username: 'mandla.sibiya', password: 'MS2024!@#' }
      },
      {
        id: 'std006',
        firstName: 'Lindiwe',
        lastName: 'Mahlangu',
        email: 'lindiwe.mahlangu@email.com',
        phone: '+27 87 678 9012',
        classId: 'cls003',
        status: 'inactive',
        enrolledDate: new Date('2024-01-12'),
        lastLogin: new Date('2024-01-15'),
        credentials: { username: 'lindiwe.mahlangu', password: 'LM2024!@#' }
      },
      {
        id: 'std007',
        firstName: 'Bongani',
        lastName: 'Zulu',
        email: 'bongani.zulu@email.com',
        phone: '+27 88 789 0123',
        classId: 'cls004',
        status: 'active',
        enrolledDate: new Date('2024-02-05'),
        lastLogin: new Date('2024-02-05'),
        credentials: { username: 'bongani.zulu', password: 'BZ2024!@#' }
      },
      {
        id: 'std008',
        firstName: 'Precious',
        lastName: 'Mokoena',
        email: 'precious.mokoena@email.com',
        phone: '+27 89 890 1234',
        classId: 'cls004',
        status: 'active',
        enrolledDate: new Date('2024-02-03'),
        lastLogin: new Date('2024-02-04'),
        credentials: { username: 'precious.mokoena', password: 'PM2024!@#' }
      }
    ];
  }

  // Statistics Methods
  getTotalStudents(): number {
    return this.students.length;
  }

  getActiveStudents(): number {
    return this.students.filter(s => s.status === 'active').length;
  }

  getTotalClasses(): number {
    return this.classes.length;
  }

  getTotalRevenue(): string {
    let total = 0;
    this.classes.forEach(cls => {
      total += cls.currentStudents * cls.pricePerStudent;
    });
    return total.toLocaleString();
  }

  // Filtering and Search
  filterStudents() {
    this.filteredStudents = this.students.filter(student => {
      const matchesSearch = !this.searchTerm || 
        student.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesClass = !this.selectedClass || student.classId === this.selectedClass;
      const matchesStatus = !this.selectedStatus || student.status === this.selectedStatus;
      
      return matchesSearch && matchesClass && matchesStatus;
    });
    
    this.currentPage = 1;
    this.updatePagination();
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedClass = '';
    this.selectedStatus = '';
    this.filterStudents();
  }

  // Pagination
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedStudents = this.filteredStudents.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredStudents.length / this.itemsPerPage);
  }

  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    const pages: number[] = [];
    const maxVisible = 5;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  // Helper Methods
  getClassName(classId: string): string {
    const cls = this.classes.find(c => c.id === classId);
    return cls ? cls.name : 'Unknown Class';
  }

  getLecturerName(classId: string): string {
    const cls = this.classes.find(c => c.id === classId);
    return cls ? cls.lecturerName : 'Unknown Lecturer';
  }

  getClassColor(classId: string): string {
    const colors = ['primary', 'secondary', 'tertiary', 'success', 'warning'];
    const index = this.classes.findIndex(c => c.id === classId);
    return colors[index % colors.length];
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'danger';
      case 'pending': return 'warning';
      default: return 'medium';
    }
  }

  getLastLoginClass(lastLogin: Date | undefined): string {
    if (!lastLogin) return 'never-logged';
    
    const daysDiff = Math.floor((new Date().getTime() - lastLogin.getTime()) / (1000 * 3600 * 24));
    if (daysDiff > 30) return 'old-login';
    if (daysDiff > 7) return 'medium-login';
    return 'recent-login';
  }

  // Selection Methods
  toggleSelectAll() {
    if (this.selectAll) {
      this.selectedStudents = this.paginatedStudents.map(s => s.id);
      this.paginatedStudents.forEach(s => s.selected = true);
    } else {
      this.selectedStudents = [];
      this.paginatedStudents.forEach(s => s.selected = false);
    }
  }

  onStudentSelect(student: Student) {
    if (student.selected) {
      if (!this.selectedStudents.includes(student.id)) {
        this.selectedStudents.push(student.id);
      }
    } else {
      this.selectedStudents = this.selectedStudents.filter(id => id !== student.id);
    }
    
    this.selectAll = this.paginatedStudents.every(s => s.selected);
  }

  // Student Actions
  async viewStudent(student: Student) {
    const alert = await this.alertController.create({
      header: `${student.firstName} ${student.lastName}`,
      message: `
        <div class="student-details">
          <p><strong>Email:</strong> ${student.email}</p>
          <p><strong>Phone:</strong> ${student.phone || 'Not provided'}</p>
          <p><strong>Class:</strong> ${this.getClassName(student.classId)}</p>
          <p><strong>Lecturer:</strong> ${this.getLecturerName(student.classId)}</p>
          <p><strong>Status:</strong> ${student.status.toUpperCase()}</p>
          <p><strong>Enrolled:</strong> ${student.enrolledDate.toLocaleDateString()}</p>
          <p><strong>Last Login:</strong> ${student.lastLogin ? student.lastLogin.toLocaleDateString() : 'Never'}</p>
          <p><strong>Username:</strong> ${student.credentials?.username || 'Not generated'}</p>
        </div>
      `,
      buttons: [
        {
          text: 'Email Credentials',
          handler: () => this.emailCredentials(student)
        },
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async editStudent(student: Student) {
    const alert = await this.alertController.create({
      header: 'Edit Student',
      inputs: [
        {
          name: 'firstName',
          placeholder: 'First Name',
          value: student.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Last Name',
          value: student.lastName
        },
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email',
          value: student.email
        },
        {
          name: 'phone',
          placeholder: 'Phone',
          value: student.phone || ''
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: (data) => {
            student.firstName = data.firstName;
            student.lastName = data.lastName;
            student.email = data.email;
            student.phone = data.phone;
            this.showToast('Student updated successfully', 'success');
          }
        }
      ]
    });

    await alert.present();
  }

  async resetPassword(student: Student) {
    const newPassword = this.generatePassword();
    
    const alert = await this.alertController.create({
      header: 'Reset Password',
      message: `Reset password for ${student.firstName} ${student.lastName}?<br><br><strong>New Password:</strong> ${newPassword}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Reset & Email',
          handler: () => {
            if (student.credentials) {
              student.credentials.password = newPassword;
            }
            this.emailCredentials(student);
            this.showToast('Password reset and emailed to student', 'success');
          }
        }
      ]
    });

    await alert.present();
  }

  async toggleStudentStatus(student: Student) {
    const newStatus = student.status === 'active' ? 'inactive' : 'active';
    const action = newStatus === 'active' ? 'activate' : 'deactivate';
    
    const alert = await this.alertController.create({
      header: `${action.charAt(0).toUpperCase() + action.slice(1)} Student`,
      message: `Are you sure you want to ${action} ${student.firstName} ${student.lastName}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: action.charAt(0).toUpperCase() + action.slice(1),
          handler: () => {
            student.status = newStatus;
            this.showToast(`Student ${action}d successfully`, 'success');
          }
        }
      ]
    });

    await alert.present();
  }

  // Add Student Methods
  async addStudent() {
    if (!this.newStudent.firstName || !this.newStudent.lastName || 
        !this.newStudent.email || !this.newStudent.classId) {
      this.showToast('Please fill in all required fields', 'danger');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Adding student...'
    });
    await loading.present();

    // Generate credentials
    const username = `${this.newStudent.firstName?.toLowerCase()}.${this.newStudent.lastName?.toLowerCase()}`;
    const password = this.generatePassword();

    const student: Student = {
      id: 'std' + (this.students.length + 1).toString().padStart(3, '0'),
      firstName: this.newStudent.firstName!,
      lastName: this.newStudent.lastName!,
      email: this.newStudent.email!,
      phone: this.newStudent.phone,
      classId: this.newStudent.classId!,
      status: 'active',
      enrolledDate: new Date(),
      credentials: { username, password }
    };

    this.students.push(student);
    
    // Update class count
    const cls = this.classes.find(c => c.id === student.classId);
    if (cls) {
      cls.currentStudents++;
    }

    if (this.newStudent.sendCredentials) {
      await this.emailCredentials(student);
    }

    await loading.dismiss();
    this.showAddStudentModal = false;
    this.resetNewStudentForm();
    this.filterStudents();
    this.showToast('Student added successfully', 'success');
  }

  resetNewStudentForm() {
    this.newStudent = { sendCredentials: true };
  }

  // Bulk Actions
  async bulkEmailCredentials() {
    const loading = await this.loadingController.create({
      message: 'Sending credentials...'
    });
    await loading.present();

    // Simulate email sending
    setTimeout(async () => {
      await loading.dismiss();
      this.showToast(`Credentials sent to ${this.selectedStudents.length} students`, 'success');
      this.clearSelection();
    }, 2000);
  }

  async bulkActivate() {
    const alert = await this.alertController.create({
      header: 'Activate Students',
      message: `Activate ${this.selectedStudents.length} selected students?`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Activate',
          handler: () => {
            this.students.forEach(student => {
              if (this.selectedStudents.includes(student.id)) {
                student.status = 'active';
              }
            });
            this.showToast(`${this.selectedStudents.length} students activated`, 'success');
            this.clearSelection();
          }
        }
      ]
    });
    await alert.present();
  }

  async bulkDeactivate() {
    const alert = await this.alertController.create({
      header: 'Deactivate Students',
      message: `Deactivate ${this.selectedStudents.length} selected students?`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Deactivate',
          handler: () => {
            this.students.forEach(student => {
              if (this.selectedStudents.includes(student.id)) {
                student.status = 'inactive';
              }
            });
            this.showToast(`${this.selectedStudents.length} students deactivated`, 'warning');
            this.clearSelection();
          }
        }
      ]
    });
    await alert.present();
  }

  async bulkDelete() {
    const alert = await this.alertController.create({
      header: 'Remove Students',
      message: `Permanently remove ${this.selectedStudents.length} selected students? This cannot be undone.`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Remove',
          handler: () => {
            this.students = this.students.filter(student => 
              !this.selectedStudents.includes(student.id)
            );
            this.showToast(`${this.selectedStudents.length} students removed`, 'success');
            this.clearSelection();
            this.filterStudents();
          }
        }
      ]
    });
    await alert.present();
  }

  clearSelection() {
    this.selectedStudents = [];
    this.selectAll = false;
    this.students.forEach(s => s.selected = false);
  }

  // Bulk Upload Methods
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      this.selectedFile = file;
    } else {
      this.showToast('Please select a valid CSV file', 'danger');
    }
  }

  downloadTemplate() {
    const csvContent = "firstName,lastName,email,phone,classId\nJohn,Doe,john.doe@email.com,+27 82 123 4567,cls001\nJane,Smith,jane.smith@email.com,+27 83 234 5678,cls002";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'student_upload_template.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  async processBulkUpload() {
    if (!this.selectedFile) {
      this.showToast('Please select a file', 'danger');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Processing upload...'
    });
    await loading.present();

    // Simulate file processing
    setTimeout(async () => {
      // Mock data from CSV
      const mockStudents = [
        { firstName: 'Ahmed', lastName: 'Hassan', email: 'ahmed.hassan@email.com', phone: '+27 81 111 2222' },
        { firstName: 'Fatima', lastName: 'Osman', email: 'fatima.osman@email.com', phone: '+27 82 222 3333' },
        { firstName: 'Ibrahim', lastName: 'Mohamed', email: 'ibrahim.mohamed@email.com', phone: '+27 83 333 4444' }
      ];

      let addedCount = 0;
      mockStudents.forEach(mockStudent => {
        const student: Student = {
          id: 'std' + (this.students.length + addedCount + 1).toString().padStart(3, '0'),
          firstName: mockStudent.firstName,
          lastName: mockStudent.lastName,
          email: mockStudent.email,
          phone: mockStudent.phone,
          classId: this.bulkUploadClassId || this.classes[0].id,
          status: 'active',
          enrolledDate: new Date(),
          credentials: {
            username: `${mockStudent.firstName.toLowerCase()}.${mockStudent.lastName.toLowerCase()}`,
            password: this.generatePassword()
          }
        };
        this.students.push(student);
        addedCount++;
      });

      await loading.dismiss();
      this.showBulkUploadModal = false;
      this.selectedFile = null;
      this.filterStudents();
      this.showToast(`${addedCount} students uploaded successfully`, 'success');
    }, 2000);
  }

  // Utility Methods
  async emailCredentials(student: Student) {
    const loading = await this.loadingController.create({
      message: 'Sending credentials...'
    });
    await loading.present();

    // Simulate email sending
    setTimeout(async () => {
      await loading.dismiss();
      this.showToast(`Credentials sent to ${student.email}`, 'success');
    }, 1500);
  }

  exportStudentData() {
    const csvData = this.filteredStudents.map(student => ({
      'First Name': student.firstName,
      'Last Name': student.lastName,
      'Email': student.email,
      'Phone': student.phone || '',
      'Class': this.getClassName(student.classId),
      'Lecturer': this.getLecturerName(student.classId),
      'Status': student.status,
      'Enrolled Date': student.enrolledDate.toLocaleDateString(),
      'Last Login': student.lastLogin ? student.lastLogin.toLocaleDateString() : 'Never',
      'Username': student.credentials?.username || ''
    }));

    const csvContent = this.convertToCSV(csvData);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `students_export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    this.showToast('Student data exported successfully', 'success');
  }

  private convertToCSV(data: any[]): string {
    if (!data.length) return '';
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
    ].join('\n');
    
    return csvContent;
  }

  private generatePassword(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'top'
    });
    await toast.present();
  }

}
