import {Component, EventEmitter} from '@angular/core';
import {IframeBrowserService} from "../../service/iframe-browser.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  urlChanged: EventEmitter<string>;

  constructor(private iframeBrowserService: IframeBrowserService) {
    this.urlChanged = iframeBrowserService.urlChanged;
  }

  onInputChanged(val) {
    this.urlChanged.next(val)
  }
}
