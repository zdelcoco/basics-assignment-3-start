import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class AppComponent {
  displayContent = false;
  numClicks = 0;
  clickLog = [0];

  toggleDisplayContent() {
    this.displayContent = !this.displayContent;
    this.numClicks++;
    this.clickLog.push(this.numClicks);
  };

  getColor() {
    return this.numClicks >= 5 ? 'blue' : 'transparent';
  }

}
