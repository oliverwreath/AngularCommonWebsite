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

  static validateCsvFile(s: string | null | undefined, separator: Separator, isFirstColumnNotEmpty: boolean): string {
    let error: string = '';

    if (s) {
      const rows = s.split(LineBreak.Default);
      error += StringUtilsService.validateCsvRow(rows[0], 0, separator, isFirstColumnNotEmpty);
      const len: number = rows[0].split(separator).length;
      for (let r = 1; r < rows.length; r++) {
        error += StringUtilsService.validateCsvRowAndLen(rows[r], r, separator, isFirstColumnNotEmpty, len);
      }
    }
    if (error === '') {
      return 'File is Valid';
    } else {
      return error;
    }
  }

  static validateCsvRow(row: string, r: number, separator: Separator, isFirstColumnNotEmpty: boolean): string {
    const fields = row.split(separator);
    if (isFirstColumnNotEmpty && !fields[0]) {
      return `Record #${r} has error: 1st column should NOT be empty! ${CsvConverterService.LINE_BREAK}`;
    } else {
      return '';
    }
  }

  static validateCsvRowAndLen(row: string, r: number, separator: Separator, isFirstColumnNotEmpty: boolean, len: number): string {
    let error = StringUtilsService.validateCsvRow(row, r, separator, isFirstColumnNotEmpty);
    const fields = row.split(separator);
    if (len != fields.length) {
      const id: string = (fields.length > 0)?fields[0]:'_';
      error += `Record #${r} (id:${id}) has error: wrong number of fields! Found ${fields.length}, should be ${len}!${CsvConverterService.LINE_BREAK}`;
    }
    return error;
  }

  static getRows(text: string): string[] {
    return text.replace(CsvConverterService.LINE_BREAK_REGEX,"\n").split(CsvConverterService.LINE_BREAK);
  }

  // TODO: move into a ng generate service csvUtil
  static countUniqueNthColumn(inputText: string, n: number, separator: Separator): string {
    if (!inputText)
      return '';

    const rows = StringUtilsService.getRows(inputText);
    const map = new Map<string, number>();
    for (let r = 1; r < rows.length; r++) {
      const row: string = rows[r];
      const fields: string[] = row.split(separator);
      const key: string = fields[n - 1];
      const val = map?.get(key);
      map.set(key, (val?val:0) + 1);
    }
    console.log(map);
    console.log(JSON.stringify(map));
    return JSON.stringify(map, (_key, value) => (value instanceof Map ? [...value] : value));
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
}
