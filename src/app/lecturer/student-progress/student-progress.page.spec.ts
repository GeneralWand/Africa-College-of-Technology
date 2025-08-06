import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProgressPage } from './student-progress.page';

describe('StudentProgressPage', () => {
  let component: StudentProgressPage;
  let fixture: ComponentFixture<StudentProgressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
