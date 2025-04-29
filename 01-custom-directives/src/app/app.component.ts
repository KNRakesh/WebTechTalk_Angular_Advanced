import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // isClicked = false;

  number = 28;

  // onClick() {
  //   this.isClicked = true;
  // }
}
