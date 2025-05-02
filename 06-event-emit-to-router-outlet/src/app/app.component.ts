import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  status = 'Offline';

  runStatus = 'Stopped';

  changeStatus() {
    this.status = this.status === 'Offline' ? 'Online' : 'Offline'
  }

  changeRunStatus() {
    this.runStatus = this.runStatus === 'Stopped' ? 'Running' : 'Stopped'
  }

  subscribeToChildEmitter(componentRef: any) {
    componentRef.runStatusEmitter.subscribe((res: any) => {
      this.changeRunStatus()
    })
  }
}
