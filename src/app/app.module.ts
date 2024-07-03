import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {NgxDiffModule} from 'ngx-diff';
import {CsvConverterComponent} from './csv-converter/csv-converter.component';
import {CsvValidatorComponent} from './csv-validator/csv-validator.component';
import {SqlValidatorComponent} from './sql-validator/sql-validator.component';
import {SqlCheatsheetComponent} from './sql-cheatsheet/sql-cheatsheet.component';

@NgModule({ declarations: [
        AppComponent,
        NavComponent,
        AboutComponent,
        ContactComponent,
        HeroComponent,
        HomeComponent,
        DiffcheckerComponent,
        CaseconverterComponent,
        CsvConverterComponent,
        CsvValidatorComponent,
        SqlValidatorComponent,
        SqlCheatsheetComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxDiffModule],
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
