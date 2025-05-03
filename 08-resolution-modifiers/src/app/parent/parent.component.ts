import { LoggerService } from '../services/logger.service';
import { ParentLoggerService } from '../services/parent-logger.service';
import { ChildComponent } from './../child/child.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [
    {
      provide: LoggerService, useClass: ParentLoggerService
    }
  ]
})
export class ParentComponent {

}
