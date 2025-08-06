import { TestBed } from '@angular/core/testing';

import { QuestionApprovalService } from './question-approval.service';

describe('QuestionApprovalService', () => {
  let service: QuestionApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
