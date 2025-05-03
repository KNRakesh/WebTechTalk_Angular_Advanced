import { TestBed } from '@angular/core/testing';

import { ParentLoggerService } from './parent-logger.service';

describe('ParentLoggerService', () => {
  let service: ParentLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
