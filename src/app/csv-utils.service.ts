import {Injectable} from '@angular/core';
import {LineBreak, Separator} from './csv-converter/csvEnum';
import {CsvConverterService} from './csv-converter.service';
import {StringUtilsService} from './string-utils.service';

@Injectable({
  providedIn: 'root'
})
export class CsvUtilsService {

  constructor() {
  }

  static validateCsvFile(s: string | null | undefined, separator: Separator, isFirstColumnNotEmpty: boolean): string {
    let error: string = '';

    if (s) {
      const rows = s.split(LineBreak.Default);
      error += CsvUtilsService.validateCsvRow(rows[0], 0, separator, isFirstColumnNotEmpty);
      const len: number = rows[0].split(separator).length;
      error += `Header #0 (id:) len = ${len} ${CsvUtilsService.getQuestionLine(len)} ${CsvConverterService.LINE_BREAK}`;
      for (let r = 1; r < rows.length; r++) {
        error += CsvUtilsService.validateCsvRowWithLen(rows[r], r, separator, isFirstColumnNotEmpty, len);
      }
    }
    if (error === '') {
      return 'File is Valid';
    } else {
      return error;
    }
  }

  static getQuestionLine(n: number): string {
    let result: string = '';
    for (let c = 0; c < n - 1; c++) {
      result += '?,';
    }
    return result + '?';
  }

  static validateCsvRow(row: string, r: number, separator: Separator, isFirstColumnNotEmpty: boolean): string {
    if (isFirstColumnNotEmpty && !row.split(separator)[0]) {
      return `Record #${r} (id:) has error: 1st column should NOT be empty! ${CsvConverterService.LINE_BREAK}`;
    } else {
      return '';
    }
  }

  static validateCsvRowWithLen(row: string, r: number, separator: Separator, isFirstColumnNotEmpty: boolean, len: number): string {
    let error = CsvUtilsService.validateCsvRow(row, r, separator, isFirstColumnNotEmpty);

    const fields = row.split(separator);
    if (len != fields.length) {
      const id: string = (fields.length > 0) ? fields[0] : '_';
      error += `Record #${r} (id:${id}) has error: wrong number of fields! Found ${fields.length}, should be ${len}!${CsvConverterService.LINE_BREAK}`;
    }
    return error;
  }

  static countUniqueNthColumn(inputText: string, n: number, separator: Separator): string {
    if (!inputText) {
      return '';
    }

    const rows = StringUtilsService.getRows(inputText);
    const map = new Map<string, number>();
    for (let r = 1; r < rows.length; r++) {
      const row: string = rows[r];
      const fields: string[] = row.split(separator);
      const key: string = fields[n - 1];
      const val = map?.get(key);
      map.set(key, (val ? val : 0) + 1);
    }
    console.log(map);
    console.log(JSON.stringify(map));
    return JSON.stringify(map, (_key, value) => (value instanceof Map ? [...value] : value));
  }
}
