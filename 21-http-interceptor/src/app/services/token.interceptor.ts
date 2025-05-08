import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
const auth_token = '324343gg345fnhg435432hgertr33453gefyrey345435';
const tokenizedReq = req.clone({
  setHeaders: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${auth_token}`
  }
})
  return next(tokenizedReq).pipe(
    retry(2),
    catchError((err: HttpErrorResponse) => {
      console.log('Route user to error page');
      return throwError(err.message);
    })
  )
}
