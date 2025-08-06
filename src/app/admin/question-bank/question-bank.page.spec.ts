import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionBankPage } from './question-bank.page';

describe('QuestionBankPage', () => {
  let component: QuestionBankPage;
  let fixture: ComponentFixture<QuestionBankPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
