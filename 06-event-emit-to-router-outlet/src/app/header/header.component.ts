import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  @Output() statusEmitter = new EventEmitter();

  btnText = 'Login';

  goToUsers() {
    this.router.navigate(['users']);
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  login() {
    this.btnText = this.btnText === 'Login' ? 'Logout' : 'Login';
    this.statusEmitter.emit();
  }
}
