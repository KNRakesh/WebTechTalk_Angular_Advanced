import { TestBed } from '@angular/core/testing';

import { ChildDirectiveLoggerService } from './child-directive-logger.service';

describe('ChildDirectiveLoggerService', () => {
  let service: ChildDirectiveLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildDirectiveLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
