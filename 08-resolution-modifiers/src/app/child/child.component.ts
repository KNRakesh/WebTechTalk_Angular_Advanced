import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ChildLoggerService } from '../services/child-logger.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [
    {
      provide: LoggerService, useClass: ChildLoggerService
    }
  ]
})
export class ChildComponent {

  constructor(@Optional() private logger: LoggerService) {}

  log() {
    this.logger.log('Button is clicked')
  }

}
