import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-request-tabs',
  templateUrl: './request-tabs.component.html',
  styleUrls: ['./request-tabs.component.css']
})
export class RequestTabsComponent implements OnInit {
  text: string;
  isBodyDisabled: boolean;

  constructor(requestService: RequestService) {
    requestService.httpMethod.subscribe(value => {
      this.isBodyDisabled = value === 'GET';
    });
  }

  ngOnInit() {
    this.text = "{\n" +
      "  \"array\": [\n" +
      "    1,\n" +
      "    2,\n" +
      "    3\n" +
      "  ],\n" +
      "  \"boolean\": true,\n" +
      "  \"null\": null,\n" +
      "  \"number\": 123,\n" +
      "  \"object\": {\n" +
      "    \"a\": \"b\",\n" +
      "    \"c\": \"d\",\n" +
      "    \"e\": \"f\"\n" +
      "  }\n" +
      "  \"string\": \"Hello World\"\n" +
      "}"
  }

}
