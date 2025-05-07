import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValildatorSentence } from './validators/sentence.validator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  comments: any [] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      comment: ['', [ValildatorSentence]]
    })
  }

  addComments() {
    this.comments.push(this.myForm.controls['comment'].value);
    this.myForm.reset();
  }
}


