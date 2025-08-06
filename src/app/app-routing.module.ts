import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'class-management',
    loadChildren: () => import('./admin/class-management/class-management.module').then( m => m.ClassManagementPageModule)
  },
  {
    path: 'lecturer-management',
    loadChildren: () => import('./admin/lecturer-management/lecturer-management.module').then( m => m.LecturerManagementPageModule)
  },
  {
    path: 'student-management',
    loadChildren: () => import('./admin/student-management/student-management.module').then( m => m.StudentManagementPageModule)
  },
  {
    path: 'certification-management',
    loadChildren: () => import('./admin/certification-management/certification-management.module').then( m => m.CertificationManagementPageModule)
  },
  {
    path: 'question-bank',
    loadChildren: () => import('./admin/question-bank/question-bank.module').then( m => m.QuestionBankPageModule)
  },
  {
    path: 'data-capturer-management',
    loadChildren: () => import('./admin/data-capturer-management/data-capturer-management.module').then( m => m.DataCapturerManagementPageModule)
  },
  {
    path: 'reports-analytics',
    loadChildren: () => import('./admin/reports-analytics/reports-analytics.module').then( m => m.ReportsAnalyticsPageModule)
  },
  {
    path: 'support-tickets',
    loadChildren: () => import('./admin/support-tickets/support-tickets.module').then( m => m.SupportTicketsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./lecturer/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'class-view',
    loadChildren: () => import('./lecturer/class-view/class-view.module').then( m => m.ClassViewPageModule)
  },
  {
    path: 'quiz-assignment',
    loadChildren: () => import('./lecturer/quiz-assignment/quiz-assignment.module').then( m => m.QuizAssignmentPageModule)
  },
  {
    path: 'student-progress',
    loadChildren: () => import('./lecturer/student-progress/student-progress.module').then( m => m.StudentProgressPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./lecturer/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'resource-upload',
    loadChildren: () => import('./lecturer/resource-upload/resource-upload.module').then( m => m.ResourceUploadPageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./lecturer/announcements/announcements.module').then( m => m.AnnouncementsPageModule)
  },
  {
    path: 'student-dashboard',
    loadChildren: () => import('./student/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'practice-mode',
    loadChildren: () => import('./student/practice-mode/practice-mode.module').then( m => m.PracticeModePageModule)
  },
  {
    path: 'quiz-results',
    loadChildren: () => import('./student/quiz-results/quiz-results.module').then( m => m.QuizResultsPageModule)
  },
  {
    path: 'progress-tracking',
    loadChildren: () => import('./student/progress-tracking/progress-tracking.module').then( m => m.ProgressTrackingPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./student/support/support.module').then( m => m.SupportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
