import {Component} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  httpMethod: Subject<string>;
  url: Subject<string>;

  constructor(private requestService: RequestService) {
    this.httpMethod = requestService.httpMethod;
    this.url = requestService.url;
  }

  onHttpMethodChanged(methodName) {
    this.httpMethod.next(methodName);
  }

  onUrlChanged(newUrl) {
    this.url.next(newUrl);
  }

  onSendRequest() {
    this.requestService.sendRequest();
  }
}
