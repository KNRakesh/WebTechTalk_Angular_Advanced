import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  counter = 2;

  parentData = 'This is coming from the parent';

  increase() {
    // setInterval(() => {
    // },1000)
    this.counter++;
  }

  ngDoCheck(): void {
    console.log('angular is checking for changes');
  }
}
