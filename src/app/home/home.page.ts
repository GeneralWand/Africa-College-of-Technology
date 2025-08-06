import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  features = [
    {
      title: 'QUESTION BANK',
      description: 'Access thousands of exam-aligned questions across 15+ certifications'
    },
    {
      title: 'PROGRESS TRACKING',
      description: 'Identify strengths and weaknesses with detailed analytics'
    },
    {
      title: 'ADMIN DASHBOARD',
      description: 'Manage users, classes, and certifications (Admin only)'
    }
  ];

}
