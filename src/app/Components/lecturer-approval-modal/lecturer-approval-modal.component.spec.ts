import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerApprovalModalComponent } from './lecturer-approval-modal.component';

describe('LecturerApprovalModalComponent', () => {
  let component: LecturerApprovalModalComponent;
  let fixture: ComponentFixture<LecturerApprovalModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerApprovalModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerApprovalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
