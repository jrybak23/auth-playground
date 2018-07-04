import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  urlChanged: EventEmitter<string>;

  constructor() {}

  onInputChanged(val) {
  }
}
