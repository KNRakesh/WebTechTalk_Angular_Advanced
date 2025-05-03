import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  selectedTab: string = 'parent';

  goToParent() {
    this.router.navigate(['parent']);
    this.selectedTab = 'parent';
  }

  goToNeighbour() {
    this.router.navigate(['neighbour']);
    this.selectedTab = 'neighbour';
  }
}
