import { SharedService } from './../shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  imports: [],
  templateUrl: './parent-two.component.html',
  styleUrl: './parent-two.component.scss',
})
export class ParentTwoComponent {
  constructor(private sharedService: SharedService) {}

  result: any;

  increase() {
    this.sharedService.count++;
    this.result = this.sharedService.count;
  }
}
