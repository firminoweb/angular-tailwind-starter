import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'frontend';
  emitMenu = false;

  getEmit(val: boolean) {
    this.emitMenu = val;
  }
}
