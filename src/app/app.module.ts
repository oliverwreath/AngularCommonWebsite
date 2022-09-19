import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {HeroComponent} from './hero/hero.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {DiffcheckerComponent} from './diffchecker/diffchecker.component';
import {CaseconverterComponent} from './caseconverter/caseconverter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    HomeComponent,
    DiffcheckerComponent,
    CaseconverterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
