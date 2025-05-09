import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  myText = '';

  constructor(private domSanitizer: DomSanitizer) {}

  search(e: any) {
    console.log(e.value);
    this.myText = e.value;

    this.domSanitizer.bypassSecurityTrustHtml(this.myText);
  }
}
