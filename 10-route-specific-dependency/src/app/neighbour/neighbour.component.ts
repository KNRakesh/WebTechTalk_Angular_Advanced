import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedService } from '../shared.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-neighbour',
  imports: [RouterOutlet, DetailComponent],
  templateUrl: './neighbour.component.html',
  styleUrl: './neighbour.component.scss',
})
export class NeighbourComponent implements OnInit {
  count = 0;

  constructor(private shared: SharedService, private router: Router) {}

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

  goToDetail() {
    this.router.navigate(['neighbour/detail']);
  }
}
