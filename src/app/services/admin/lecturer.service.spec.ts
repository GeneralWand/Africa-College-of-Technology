import { TestBed } from '@angular/core/testing';

import { LecturerService } from './lecturer.service';

describe('LecturerService', () => {
  let service: LecturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
