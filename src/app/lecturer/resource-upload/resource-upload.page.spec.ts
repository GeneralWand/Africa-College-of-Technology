import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceUploadPage } from './resource-upload.page';

describe('ResourceUploadPage', () => {
  let component: ResourceUploadPage;
  let fixture: ComponentFixture<ResourceUploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
