import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  imports: [CommonModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss',
})
export class NgSwitchComponent {
  type = 'green-square';

  draw(type: string) {
    this.type = type;
  }
}
