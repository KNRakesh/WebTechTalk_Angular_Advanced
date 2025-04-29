import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let userRole = 'admin';

  let router = inject(Router);

  if (userRole !== 'admin') {
    return router.parseUrl('/access-denied');
  }

  return true;
};
