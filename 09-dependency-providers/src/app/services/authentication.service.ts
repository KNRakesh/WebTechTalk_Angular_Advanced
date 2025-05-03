import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  isLoggedIn = false;

  init() {
    console.log('This is a real authentication service');
  }
}
