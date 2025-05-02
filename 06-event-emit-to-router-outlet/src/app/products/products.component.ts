import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  runStatus = 'Stopped';

  @Output() runStatusEmitter = new EventEmitter();

  toggleStatus() {
    this.runStatusEmitter.emit();
  }
}
