import {inject, TestBed} from '@angular/core/testing';

import {IframeBrowserService} from './iframe-browser.service';

describe('IframeBrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IframeBrowserService]
    });
  });

  it('should be created', inject([IframeBrowserService], (service: IframeBrowserService) => {
    expect(service).toBeTruthy();
  }));
});
