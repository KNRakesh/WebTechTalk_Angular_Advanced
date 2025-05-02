import { SharedService } from './../shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  imports: [],
  templateUrl: './parent-one.component.html',
  styleUrl: './parent-one.component.scss',
})
export class ParentOneComponent {
  // SharedService = new SharedService;

  constructor(private sharedService: SharedService) {}

  result: any;

  increase() {
    this.sharedService.count++;
    this.result = this.sharedService.count;
  }
}
