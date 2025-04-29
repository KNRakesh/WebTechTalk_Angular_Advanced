// import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { CanLoadFn, Route, UrlSegment, Router } from '@angular/router';

// export const modulesGuard: CanMatchFn = (route, segments) => {
  export const modulesGuard: CanLoadFn = (route: Route, segments: UrlSegment[]) => {
  let userRole = 'admin';

  let router = inject(Router);

  if(userRole !== 'admin'){
    return router.parseUrl('/access-denied');
  }
  
    return true;
};
