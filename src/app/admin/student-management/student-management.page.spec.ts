import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentManagementPage } from './student-management.page';

describe('StudentManagementPage', () => {
  let component: StudentManagementPage;
  let fixture: ComponentFixture<StudentManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
