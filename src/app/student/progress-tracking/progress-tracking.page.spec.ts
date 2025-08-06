import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressTrackingPage } from './progress-tracking.page';

describe('ProgressTrackingPage', () => {
  let component: ProgressTrackingPage;
  let fixture: ComponentFixture<ProgressTrackingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
