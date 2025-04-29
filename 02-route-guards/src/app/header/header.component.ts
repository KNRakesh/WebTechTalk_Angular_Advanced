import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // userRole = 'user';

  goToHome() {
    this.router.navigate(['home']);
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

  goToOffers() {
    this.router.navigate(['offers']);
  }

  goToAdmin() {
    // if (this.userRole === 'admin') {
      this.router.navigate(['admin']);
    // } else {
    //   this.router.navigate(['access-denied']);
    // }
  }
}
