import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LeftPanelComponent} from './component/left-panel/left-panel.component';
import {RightPanelComponent} from './component/right-panel/right-panel.component';
import {FormsModule} from "@angular/forms";
import {NavigationBarComponent} from './component/navigation-bar/navigation-bar.component';
import {SafePipe} from './pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    NavigationBarComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
