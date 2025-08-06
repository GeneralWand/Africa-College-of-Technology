import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizAssignmentPage } from './quiz-assignment.page';

describe('QuizAssignmentPage', () => {
  let component: QuizAssignmentPage;
  let fixture: ComponentFixture<QuizAssignmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
