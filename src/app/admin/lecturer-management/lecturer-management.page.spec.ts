import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturerManagementPage } from './lecturer-management.page';

describe('LecturerManagementPage', () => {
  let component: LecturerManagementPage;
  let fixture: ComponentFixture<LecturerManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
