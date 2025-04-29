import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EditAboutComponent } from '../edit-about/edit-about.component';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(private router: Router) {}

  goToEdit() {
    this.router.navigate(['about/edit'])
  }

}
