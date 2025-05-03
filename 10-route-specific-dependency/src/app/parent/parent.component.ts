import { ChildComponent } from '../child/child.component';
import { SharedService } from '../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit {
  count = 0;

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.count = this.shared.count;
  }

  increase() {
    this.count++;
    this.shared.count = this.count;
  }

  refresh() {
    this.count = this.shared.count;
  }
}
