import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  services = [
    new AuthServiceInfo("http-basic-playground-service", "HTTP Basic authentication"),
    new AuthServiceInfo("session-based-playground-service", "Session Based authentication")
  ];

  constructor() {
  }

  onServiceChange(selectedService) {
  }

  ngOnInit() {
  }
}

class AuthServiceInfo {
  constructor(public name: string, public title: string) {
  }
}


