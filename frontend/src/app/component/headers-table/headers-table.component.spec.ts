import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeadersTableComponent} from './headers-table.component';

describe('HeadersTableComponent', () => {
  let component: HeadersTableComponent;
  let fixture: ComponentFixture<HeadersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
