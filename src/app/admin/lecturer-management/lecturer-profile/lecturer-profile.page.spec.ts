import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturerProfilePage } from './lecturer-profile.page';

describe('LecturerProfilePage', () => {
  let component: LecturerProfilePage;
  let fixture: ComponentFixture<LecturerProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
