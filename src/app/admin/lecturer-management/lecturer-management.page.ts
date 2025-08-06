import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer-management',
  templateUrl: './lecturer-management.page.html',
  styleUrls: ['./lecturer-management.page.scss'],
  standalone: false
})
export class LecturerManagementPage implements OnInit {

    lecturers = [
      { id: 1, name: 'Dr. Jane Mkhize', email: 'jane.mkhize@college.edu', subject: 'Mathematics' },
      { id: 2, name: 'Prof. John Dlamini', email: 'john.dlamini@college.edu', subject: 'Computer Science' },
    ];
  
    openAddLecturer() {
      console.log('Open Add Lecturer Form');
    }
  
    editLecturer(lecturer: any) {
      console.log('Edit Lecturer', lecturer);
    }
  

  constructor() { }

  ngOnInit() {
  }

}
