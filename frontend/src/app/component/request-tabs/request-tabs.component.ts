import {Component} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-request-tabs',
  templateUrl: './request-tabs.component.html',
  styleUrls: ['./request-tabs.component.css']
})
export class RequestTabsComponent {
  isBodyDisabled: boolean;
  requestBody: Subject<string>;

  constructor(requestService: RequestService) {
    this.requestBody = requestService.requestBody;
    requestService.httpMethod.subscribe(value => {
      this.isBodyDisabled = value === 'GET';
    });
  }

  onRequestBodyChanged(newRequestBody) {
    this.requestBody.next(newRequestBody);
  }
}
