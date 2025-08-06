import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassViewPage } from './class-view.page';

describe('ClassViewPage', () => {
  let component: ClassViewPage;
  let fixture: ComponentFixture<ClassViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
