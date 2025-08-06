import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizResultsPage } from './quiz-results.page';

describe('QuizResultsPage', () => {
  let component: QuizResultsPage;
  let fixture: ComponentFixture<QuizResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
