import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildDirectiveLoggerService {

  constructor() { }

  log(msg: string) {
    console.log('Child directive: ', msg)
  }
}
