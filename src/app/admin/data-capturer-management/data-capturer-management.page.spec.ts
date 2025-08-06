import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataCapturerManagementPage } from './data-capturer-management.page';

describe('DataCapturerManagementPage', () => {
  let component: DataCapturerManagementPage;
  let fixture: ComponentFixture<DataCapturerManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCapturerManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
