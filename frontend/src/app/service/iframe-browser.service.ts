import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IframeBrowserService implements OnInit{
  public urlChanged: EventEmitter<string>;

  constructor() {
    this.urlChanged = new EventEmitter();
    this.urlChanged.subscribe(url => {
      console.log("iframe URL changed:" + url);
    });
  }

  ngOnInit(): void {
  }

  navigate(selectedService: string) {
    this.urlChanged.next(environment.hostURL + "/" + selectedService);
  }
}
