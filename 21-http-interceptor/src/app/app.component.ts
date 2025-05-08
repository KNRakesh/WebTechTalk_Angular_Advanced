import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  getUser() {
    this.http.get('http://something.com/api/user').subscribe((res) => {
      console.log(res);
    });
  }

  getProduct() {
    this.http.get('http://something.com/api/product').subscribe((res) => {
      console.log(res);
    });
  }

  getContact() {
    this.http.get('http://something.com/api/contact').subscribe((res) => {
      console.log(res);
    });
  }
}
