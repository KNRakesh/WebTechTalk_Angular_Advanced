import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  bannerImg = '';
  birdsImg = '';
  animalsImg = '';
  flowersImg = '';
  fruitsImg = '';
  vegtablesImg = '';

  ngOnInit(): void {
    this.bannerImg = 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    this.birdsImg = 'https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    this.animalsImg = 'https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    this.flowersImg = 'https://images.pexels.com/photos/46231/water-lilies-pink-water-lake-46231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    this.fruitsImg = 'https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&w=600';
    this.vegtablesImg = 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600';
  }
}
