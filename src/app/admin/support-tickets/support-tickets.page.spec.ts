import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportTicketsPage } from './support-tickets.page';

describe('SupportTicketsPage', () => {
  let component: SupportTicketsPage;
  let fixture: ComponentFixture<SupportTicketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
