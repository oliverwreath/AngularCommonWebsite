import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HeroComponent} from './hero/hero.component';
import {HomeComponent} from './home/home.component';
import {DiffcheckerComponent} from './diffchecker/diffchecker.component';
import {CaseconverterComponent} from './caseconverter/caseconverter.component';
import {CsvConverterComponent} from './csv-converter/csv-converter.component';
import {CsvValidatorComponent} from './csv-validator/csv-validator.component';
import {SqlValidatorComponent} from './sql-validator/sql-validator.component';
import {SqlCheatsheetComponent} from './sql-cheatsheet/sql-cheatsheet.component';

const routes: Routes = [
  {path: '', component: DiffcheckerComponent},
  {path: 'home', component: HomeComponent},
  {path: 'diffchecker', component: DiffcheckerComponent},
  {path: 'caseconverter', component: CaseconverterComponent},
  {path: 'csvconverter', component: CsvConverterComponent},
  {path: 'csv-validator', component: CsvValidatorComponent},
  {path: 'sql-cheatsheet', component: SqlCheatsheetComponent},
  {path: 'sql-validator', component: SqlValidatorComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
