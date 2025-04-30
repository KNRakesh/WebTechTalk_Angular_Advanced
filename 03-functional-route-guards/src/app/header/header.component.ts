import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  LoginStatus = 'Login';

  userType = 'user';

  constructor(private router: Router, private authService: AuthService) {}

  goToHome() {
    this.router.navigate(['home']);
  }

  goToUser() {
    this.router.navigate(['user']);
  }

  goToAdmin() {
    this.router.navigate(['admin']);
  }

  toggleLogin() {
    if (!this.authService.isLoggedIn) {
      this.authService.login();
      console.log(this.authService.isLoggedIn);
      this.LoginStatus = 'Logout';
      this.userType = 'admin';
      console.log(this.userType);
    } else {
      this.authService.logout();
      console.log(this.authService.isLoggedIn);
      this.LoginStatus = 'Login';
      this.userType = 'user';
      console.log(this.userType);
    }
  }
}
