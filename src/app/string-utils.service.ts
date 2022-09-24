import {Injectable} from '@angular/core';
import {FormControl, ɵValue} from '@angular/forms';
import {LineBreak} from './csv-converter/csvEnum';

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
}
