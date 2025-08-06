import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeModePage } from './practice-mode.page';

describe('PracticeModePage', () => {
  let component: PracticeModePage;
  let fixture: ComponentFixture<PracticeModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
