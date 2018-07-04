import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-tabs',
  templateUrl: './request-tabs.component.html',
  styleUrls: ['./request-tabs.component.css']
})
export class RequestTabsComponent implements OnInit {
  text: string;

  constructor() { }

  ngOnInit() {
    this.text="{\n" +
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
