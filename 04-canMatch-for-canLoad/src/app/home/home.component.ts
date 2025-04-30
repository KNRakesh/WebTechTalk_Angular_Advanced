import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public auth: AuthService) {}

  login(){
    this.auth.isLoggedIn = true;
  }

  logout(){
    this.auth.isLoggedIn = false;
  }

}
