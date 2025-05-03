import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FakeAuthenticationService } from '../services/fake-authentication.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent {

  isLoggedIn = false;

  constructor(private auth: AuthenticationService) {}

  // login() {
  //   this.isLoggedIn = true;
  //   this.auth.isLoggedIn = true;
  // }

  // logout() {
  //   this.isLoggedIn = false;
  //   this.auth.isLoggedIn = false;
  // }

  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
    this.auth.isLoggedIn = !this.auth.isLoggedIn;
  }

}
