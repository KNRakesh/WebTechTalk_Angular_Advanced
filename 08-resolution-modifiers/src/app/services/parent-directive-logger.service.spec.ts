import { TestBed } from '@angular/core/testing';

import { ParentDirectiveLoggerService } from './parent-directive-logger.service';

describe('ParentDirectiveLoggerService', () => {
  let service: ParentDirectiveLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentDirectiveLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
