// import { authGuard } from './auth.guard';
import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// export const authGuard: CanActivateFn = (route, state) => {
//   let userRole = 'admin';

//   let router = inject(Router);

//   if (userRole !== 'admin') {
//     return router.parseUrl('/access-denied');
//   }

//   return true;
// };

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  userRole = 'admin';

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userRole !== 'admin') {
      this.router.navigate(['access-denied']);
    }
    return true;
  }
}
