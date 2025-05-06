import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';
import { BoxDirective } from './box.directive';

@Directive({
  selector: '[appBorderBox]',
  hostDirectives: [BorderDirective, BoxDirective]
})
export class BorderBoxDirective {

  constructor() { }

}
