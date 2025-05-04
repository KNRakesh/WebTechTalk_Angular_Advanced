import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StrtoarrPipe } from './strtoarr.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, StrtoarrPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  nums = [1, 2, 3, 4, 5, 6, 7, 8];

  firstName = 'Suren';
}
