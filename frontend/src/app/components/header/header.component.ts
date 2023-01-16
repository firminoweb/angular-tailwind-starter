import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() offsetMenuEvent: EventEmitter<boolean> = new EventEmitter();
  offsetMenu = false;

  onMenu(val: boolean) {
    this.offsetMenuEvent.emit(val);
    this.offsetMenu = !this.offsetMenu;
  }
}
