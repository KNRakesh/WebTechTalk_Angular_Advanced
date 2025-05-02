import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  userId = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // YOU'LL GET THE ROUTE-PARAM ONLY ONCE WHEN THE COMPONENT LOADS
    // this.userId = this.router.snapshot.params['id'];
    this.router.paramMap.subscribe((params) => {
      this.userId = params.get('id') || '';
    })
  }
}
