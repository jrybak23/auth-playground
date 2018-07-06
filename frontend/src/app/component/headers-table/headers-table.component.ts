import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {HeaderInfo} from "../../model/header-info";

@Component({
  selector: 'app-headers-table',
  templateUrl: './headers-table.component.html',
  styleUrls: ['./headers-table.component.css']
})
export class HeadersTableComponent implements OnInit {

  headers: Array<HeaderInfo>;

  constructor(public requestService: RequestService) {
    this.headers = requestService.requestHeaders;
  }

  ngOnInit() {
  }

  onAddHeader() {
    this.headers.push(new HeaderInfo("", ""));
  }

  onDeleteHeader(headerInfo: HeaderInfo) {
    const index = this.headers.indexOf(headerInfo);
    this.headers.splice(index, 1);
  }
}
