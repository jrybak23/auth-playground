import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {HeaderInfo} from "../model/header-info";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieInfo} from "../model/cookie-info";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  httpMethod: BehaviorSubject<string>;
  url: BehaviorSubject<string>;
  requestHeaders: Array<HeaderInfo>;
  requestBody: BehaviorSubject<string>;
  responseBody: Subject<string>;
  responseStatus: Subject<string>;
  responseHeaders: Subject<Array<HeaderInfo>>;
  cookies: Array<CookieInfo>;

  constructor(private httpClient: HttpClient) {
    this.httpMethod = new BehaviorSubject("GET");
    this.httpMethod.subscribe(value => console.debug("HTTP method changed: " + value));
    this.url = new BehaviorSubject("");
    this.url.subscribe(value => console.debug("URL changed:" + value));
    this.requestBody = new BehaviorSubject("");
    this.requestBody.subscribe(value => console.debug("Request body changed:" + value));
    this.requestHeaders = [];
    //this.requestHeaders = new BehaviorSubject([]);
    //this.requestHeaders.subscribe(value => console.debug("Headers:" + JSON.stringify(value)));
    this.responseBody = new BehaviorSubject("");
    this.responseStatus = new BehaviorSubject("");
    this.responseHeaders = new BehaviorSubject([]);
  }

  public sendRequest() {
    const httpMethod = this.httpMethod.getValue();
    const url = this.url.getValue();

    const headers = {};
    for (let header of this.requestHeaders) {
      headers[header.key] = header.value;
    }

    let body = undefined;
    if (this.httpMethod.getValue() !== 'GET') {
      body = this.requestBody.getValue();
    }

    this.httpClient.request(httpMethod, url, {
      body: body,
      observe: 'response',
      headers: new HttpHeaders(headers),
      withCredentials: true
    })
      .subscribe(response => {
        this.responseBody.next(JSON.stringify(response.body));
        const status = response.status.toString();
        this.responseStatus.next(`${status} ${response.statusText}`);
        this.updateResponseHeaders(response.headers);
      }, error => {
        this.responseStatus.next(`${error.status} ${error.statusText}`);
        this.updateResponseHeaders(error.headers);
        if (error.status !== 200) {
          this.responseBody.next("");
          this.responseHeaders.next([]);
        } else {
          this.responseBody.next(error.error.text)
        }
      });
  }

  private updateResponseHeaders(responseHeaders) {
    const headerInfos = responseHeaders.keys()
      .map(key => new HeaderInfo(key, responseHeaders.get(key)));
    this.responseHeaders.next(headerInfos)
  }
}
