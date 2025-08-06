import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsAnalyticsPage } from './reports-analytics.page';

describe('ReportsAnalyticsPage', () => {
  let component: ReportsAnalyticsPage;
  let fixture: ComponentFixture<ReportsAnalyticsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
