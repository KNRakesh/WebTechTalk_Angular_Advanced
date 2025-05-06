import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { ColorDirective } from './directives/color.directive';
import { BorderDirective } from './directives/border.directive';
import { BoxDirective } from './directives/box.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SectionComponent, ColorDirective, BoxDirective, BorderDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '17-directive-composition-api';
}
