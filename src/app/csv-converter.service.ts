import {Injectable} from '@angular/core';
import {StringUtilsService} from './string-utils.service';

@Injectable({
  providedIn: 'root'
})
export class CsvConverterService {
  static LINE_BREAK_REGEX: RegExp = /\r\n|\n\r|\n|\r/g;
  static LINE_BREAK: string = '\n';
  private static OPENING_BRACKET: string = '{\n';
  private static CLOSING_BRACKET: string = '}';
  private static OPENING_SQUARE_BRACKET: string = '[\n';
  private static CLOSING_SQUARE_BRACKET: string = ']';
  private static COMMA_SEPARATOR: string = ',';

  constructor() { }

  static csvToJson(csv: string, separator: string = this.COMMA_SEPARATOR): string {
    if (!csv)
      return csv;

    const rows = StringUtilsService.getRows(csv);
    console.log(`rows: ${rows}`, rows);
    const headerRow = rows[0];
    const headers = headerRow.split(separator);
    let result: string = CsvConverterService.OPENING_SQUARE_BRACKET;
    const size = headers.length;
    let isFirstRow = true;
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      const fields = row.split(separator);
      if (fields.length != size) {
        console.log(`CsvConverterService.csvToJson: row: ${fields.length} has wrong size: L${row}`, fields);
        continue;
      }

      if (!isFirstRow)
        result += ',\n';
      else
        isFirstRow = false;

      result += '  '+CsvConverterService.OPENING_BRACKET;
      let isFirstField = true;
      for (let c = 0; c < fields.length; c++) {
        if (!isFirstField)
          result += ',\n';
        else
          isFirstField = false;

        const field: string = fields[c];
        result += `    "${headers[c]}": "${field}"`;
      }
      result += '\n';
      result += '  '+CsvConverterService.CLOSING_BRACKET;
    }
    result += '\n';
    result += CsvConverterService.CLOSING_SQUARE_BRACKET;
    return result;
  }

  static csvToXml(csv: string, separator: string = this.COMMA_SEPARATOR): string {
    if (!csv)
      return csv;

    return csv;
  }
}
