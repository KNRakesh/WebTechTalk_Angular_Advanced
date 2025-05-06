import { Component, Input } from '@angular/core';
import { ColorDirective } from '../directives/color.directive';
import { BoxDirective } from '../directives/box.directive';
import { BorderDirective } from '../directives/border.directive';
import { ColorBoxDirective } from '../directives/color-box.directive';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  // hostDirectives: [BoxDirective, BorderDirective, ColorDirective]
  hostDirectives: [BoxDirective]
})
export class SectionComponent {
  @Input() text = '';
}
