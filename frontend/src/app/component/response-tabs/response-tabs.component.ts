import {Component} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {Subject} from "rxjs";
import {HeaderInfo} from "../../model/header-info";

@Component({
  selector: 'app-response-tabs',
  templateUrl: './response-tabs.component.html',
  styleUrls: ['./response-tabs.component.css']
})
export class ResponseTabsComponent {
  responseStatus: Subject<string>;
  responseBody: Subject<string>;
  responseHeaders: Subject<Array<HeaderInfo>>;

  constructor(requestService: RequestService) {
    this.responseBody = requestService.responseBody;
    this.responseStatus = requestService.responseStatus;
    this.responseHeaders = requestService.responseHeaders;
  }

}
