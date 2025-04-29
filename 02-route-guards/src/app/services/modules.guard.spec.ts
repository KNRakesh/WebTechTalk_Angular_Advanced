import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { modulesGuard } from './modules.guard';

describe('modulesGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => modulesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
