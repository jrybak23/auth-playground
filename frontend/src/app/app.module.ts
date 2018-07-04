import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LeftPanelComponent} from './component/left-panel/left-panel.component';
import {RightPanelComponent} from './component/right-panel/right-panel.component';
import {FormsModule} from "@angular/forms";
import {NavigationBarComponent} from './component/navigation-bar/navigation-bar.component';
import {RequestTabsComponent} from './component/request-tabs/request-tabs.component';
import {ResponseTabsComponent} from './component/response-tabs/response-tabs.component';
import {HeadersTableComponent} from './component/headers-table/headers-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    NavigationBarComponent,
    RequestTabsComponent,
    ResponseTabsComponent,
    HeadersTableComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
