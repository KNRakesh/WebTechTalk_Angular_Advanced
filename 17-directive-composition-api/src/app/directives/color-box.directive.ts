import { Directive } from '@angular/core';
import { ColorDirective } from './color.directive';
import { BoxDirective } from './box.directive';

@Directive({
  selector: '[appColorBox]',
  hostDirectives: [ColorDirective, BoxDirective]
})
export class ColorBoxDirective {

  constructor() { }

}
