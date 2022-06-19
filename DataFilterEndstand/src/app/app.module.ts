import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxSliderModule} from "@angular-slider/ngx-slider";

import {AppComponent} from './app.component';
//header
import {HeaderMainComponent} from './components/header/header-main/header-main.component';
//main
import {MainComponent} from './components/main/main.component';
//content
import {ContentComponent} from './components/main/content/content.component';
import {WelcomeComponent} from "./components/main/content/welcome/welcome.component";
import {ResultListComponent} from "./components/main/content/result-list/result-list.component";
import {ResultEntryComponent} from "./components/main/content/result-list/result-entry/result-entry.component";
import {SearchRedirectComponent} from './components/main/content/result-list/search-redirect/search-redirect.component';
import {PageNavComponent} from './components/main/content/result-list/page-nav/page-nav.component';
//sidebar
import {SidebarComponent} from './components/main/sidebar/sidebar.component';
import {FilterTabComponent} from './components/main/sidebar/filter-tab/filter-tab.component';
import {FilterToggleComponent} from './components/main/sidebar/filter-tab/filter-toggle/filter-toggle.component';
import {FilterSlideComponent} from './components/main/sidebar/filter-tab/filter-slide/filter-slide.component';
import {
  ToggleEntryComponent
} from './components/main/sidebar/filter-tab/filter-toggle/toggle-entry/toggle-entry.component';
//footer
import {FooterMainComponent} from './components/footer/footer-main/footer-main.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FilterTabComponent,
    FilterToggleComponent,
    FilterSlideComponent,
    FooterMainComponent,
    HeaderMainComponent,
    MainComponent,
    ContentComponent,
    ResultEntryComponent,
    ResultListComponent,
    WelcomeComponent,
    FilterSlideComponent,
    ToggleEntryComponent,
    SearchRedirectComponent,
    PageNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FontAwesomeModule,
    NgxSliderModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
