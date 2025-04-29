import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  CanDeactivateFn,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';

// export const notCompleteGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
//   let response = confirm('Are you sure you want to leave?');
//   if(response == true){
//     return true;
//   }else {
//     return false;
//   }

// };

@Injectable({
  providedIn: 'root',
})
export class NotCompleteGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    let response = confirm('Are you sure you want to leave?');
    if (response == true) {
      return true;
    } else {
      return false;
    }
  }
}
