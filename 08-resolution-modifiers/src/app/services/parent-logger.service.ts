import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentLoggerService {

  constructor() { 
    console.log('parent logger is constructed');
  }

  log(msg: string) {
    console.log('parent: ' + msg);
  }
}
