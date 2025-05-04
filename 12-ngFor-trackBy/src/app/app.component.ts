import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = [
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Ron' },
    { id: 3, name: 'Hermione' },
    { id: 4, name: 'Snape' },
    { id: 5, name: 'Hagrid' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Harry' },
      { id: 2, name: 'Ron' },
      { id: 4, name: 'Sirius' },
      { id: 5, name: 'Hagrid' },
      { id: 6, name: 'Dumbledore' },
    ];
  }

  // trackBy function signature has 2 args - index & item (in that order)
  // trackByUser(index: number) {
  //   return index;
  // }

  trackByUser(index: number, user: any) {
    return user.id;
  }
}
