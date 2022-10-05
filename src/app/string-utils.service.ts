import {Injectable} from '@angular/core';
import {FormControl, ɵValue} from '@angular/forms';
import {LineBreak, Separator} from './csv-converter/csvEnum';
import {CsvConverterService} from './csv-converter.service';

@Injectable({
  providedIn: 'root'
})
export class StringUtilsService {

  constructor() { }

  static toLowerCase(s: ɵValue<FormControl<string | null>> | undefined): string {
    if (s) {
      return s.toLowerCase();
    } else {
      return '';
    }
  }

  static toUpperCase(s: ɵValue<FormControl<string | null>> | undefined): string {
    if (s) {
      return s.toLowerCase();
    } else {
      return '';
    }
  }

  static trim(s: string | null | undefined): string {
    if (s) {
      return s.trim();
    } else {
      return '';
    }
  }

  static replaceLineBreaksWithSpaces(s: string | null | undefined): string {
    if (s) {
      return s.replace(/\n/g, ' ');
    } else {
      return '';
    }
  }

  static sortLines(s: string | null | undefined): string {
    if (s) {
      let rows = s.split(LineBreak.Default);
      rows.sort();
      return rows.join(LineBreak.Default);
    } else {
      return '';
    }
  }

  static removeExcessiveWhiteSpace(s: string | null | undefined): string {
    if (s) {
      let rows = s.split(LineBreak.Default);
      for (let r = 0; r < rows.length; r++) {
        rows[r] = rows[r].trim();
        rows[r] = rows[r].replace(/\s+/g, ' ')
      }
      return rows.join(LineBreak.Default);
    } else {
      return '';
    }
  }

  static getRows(text: string): string[] {
    return text.replace(CsvConverterService.LINE_BREAK_REGEX,"\n").split(CsvConverterService.LINE_BREAK);
  }

  static SELECT: string = 'SELECT';
  static FROM: string = 'FROM';
  static WHERE: string = 'WHERE';
  static GROUP_BY: string = 'ORDER BY';
  static validateSQL(s: string | null | undefined, separator: Separator, isFirstColumnNotEmpty: boolean): string {
    let error: string = '';

    if (s) {
      s = StringUtilsService.replaceLineBreaksWithSpaces(s).toUpperCase();
      if (s.includes(StringUtilsService.SELECT)) {
        error += StringUtilsService.validateSQLSelect(s, separator, isFirstColumnNotEmpty);
      }
      // error += StringUtilsService.validateCsvRow(rows[0], 0, separator, isFirstColumnNotEmpty);
      // const len: number = rows[0].split(separator).length;
      // for (let r = 1; r < rows.length; r++) {
      //   error += StringUtilsService.validateCsvRowAndLen(rows[r], r, separator, isFirstColumnNotEmpty, len);
      // }
    }
    if (error === '') {
      return 'File is Valid';
    } else {
      return error;
    }
  }

  static validateSQLSelect(s: string | null | undefined, separator: Separator, isFirstColumnNotEmpty: boolean): string {
    let error: string = '';

    if (s) {
      s = s.replace(LineBreak.Default, ' ').toUpperCase();
      const s1 = s.substring(s.indexOf(this.SELECT), s.indexOf(this.FROM));
      const thirdIndex = s.indexOf(this.WHERE)==-1?s.indexOf(this.GROUP_BY):s.indexOf(this.WHERE);
      console.log(s.indexOf(this.WHERE));
      console.log(s.indexOf(this.GROUP_BY))
      const s2 = s.substring(s.indexOf(this.FROM), thirdIndex);
      const s3 = s.substring(thirdIndex);
      console.log(s1);
      console.log(s2);
      console.log(s3);
    }
    if (error === '') {
      return 'File is Valid';
    } else {
      return error;
    }
  }

  static getCamelCase(words: string[]): string {
    for (let w = 0; w < words.length; w++) {
      words[w] = words[w][0].toUpperCase() + words[w].slice(1).toLowerCase();
    }
    return words.join('');
  }

  static getUnderscoreFromCamelCase(words: string[]) {
    for (let w = 0; w < words.length; w++) {
      var ws = words[w].trim().replace(/([a-z])([A-Z])/g, '$1_$2');
      console.log(ws);
      words[w] = ws;
    }
    return words.join('');
  }
}
