import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypeSafetyComponent } from './type-safety/type-safety.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TypeSafetyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '20-typed-reactive-forms';
}
