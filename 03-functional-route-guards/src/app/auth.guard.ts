import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuardFn: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);

  let router = inject(Router);

  if (auth.isLoggedIn) {
    console.log('from auth.gaurd : isLoggedIn - ', auth.isLoggedIn);
    return true;
  }
  console.log('from auth.gaurd : isLoggedIn - ', auth.isLoggedIn);
  return router.parseUrl('/access-denied');
};
