import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  imports: [DetailComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
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
