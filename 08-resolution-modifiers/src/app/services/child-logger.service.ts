import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChildLoggerService {
  constructor() {
    console.log('child logger is constructed');
  }

  log(msg: string) {
    console.log('child: ' + msg);
  }
}
