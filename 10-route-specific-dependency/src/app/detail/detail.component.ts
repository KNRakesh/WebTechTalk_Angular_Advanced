import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
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
