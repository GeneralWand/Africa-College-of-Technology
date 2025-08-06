import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationManagementPage } from './certification-management.page';

describe('CertificationManagementPage', () => {
  let component: CertificationManagementPage;
  let fixture: ComponentFixture<CertificationManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
