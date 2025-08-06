import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassManagementPage } from './class-management.page';

describe('ClassManagementPage', () => {
  let component: ClassManagementPage;
  let fixture: ComponentFixture<ClassManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
