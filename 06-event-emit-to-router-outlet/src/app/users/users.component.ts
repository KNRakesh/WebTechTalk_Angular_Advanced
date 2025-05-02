import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  runStatus = 'Stopped';

  @Output() runStatusEmitter = new EventEmitter();

  toggleStatus() {
    this.runStatusEmitter.emit();
  }
}
