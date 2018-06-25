import {Component, ElementRef, ViewChild} from '@angular/core';
import {IframeBrowserService} from "../../service/iframe-browser.service";


const DEFAULT_IFRAME_URL = '/assets/iframe-default.svg';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent {
  serviceURL: string = DEFAULT_IFRAME_URL;
  @ViewChild('mainIframe') iframe: ElementRef;

  constructor(private iframeBrowserService: IframeBrowserService) {
    iframeBrowserService.urlChanged.subscribe(url => {
      if (url) {
        this.serviceURL = url;
      }
    })
  }

  onIframeURLChanged() {
    const newURL = this.iframe.nativeElement.contentWindow.location.href;
    if (newURL && newURL != DEFAULT_IFRAME_URL && newURL != this.serviceURL) {
      this.iframeBrowserService.urlChanged.next(newURL);
    }
  }
}
