import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // strings
  firstName = 'Harry';
  lastName = 'Potter';
  salutation = 'Mr.';
  // fullName = this.firstName + " " + this.lastName;
  // fullName = this.salutation + " " + this.lastName;

  // array
  cart = [
    { id: 1, name: 'Pen', price: 20, quantity: 5 },
    { id: 2, name: 'Pencil', price: 3, quantity: 10 },
    { id: 3, name: 'Eraser', price: 5, quantity: 8 },
  ];

  // object
  student = {
    name: 'Ron',
    age: 25,
    details: {
      address: {
        permanent: {
          number: 22,
          street: 'Hogwarts Lane',
        },
        contact: {
          number: 78,
          street: 'Dragon street',
        },
      },
    },
  };

  // observable
  items$ = of([2, 4, 1, 2, 4, 5]);
}
