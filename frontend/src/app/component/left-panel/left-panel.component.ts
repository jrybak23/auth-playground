import {Component, OnInit} from '@angular/core';
import {IframeBrowserService} from "../../service/iframe-browser.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  services = [
    new AuthService("http-basic-playground-service", "HTTP Basic authentication"),
    new AuthService("session-based-playground-service", "Session Based authentication")
  ];

  constructor(private iframeBrowserService: IframeBrowserService) {
  }

  onServiceChange(selectedService) {
    this.iframeBrowserService.navigate(selectedService);
  }

  ngOnInit() {
  }
}

class AuthService {
  constructor(public name: string, public title: string) {
  }
}


