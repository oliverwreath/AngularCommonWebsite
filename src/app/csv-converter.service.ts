import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvConverterService {
  static LINE_BREAK: string = '\n';
  static OPENING_BRACKET: string = '{\n';
  static CLOSING_BRACKET: string = '}';
  static OPENING_SQUARE_BRACKET: string = '[\n';
  static CLOSING_SQUARE_BRACKET: string = ']';
  private COMMA_SEPARATOR: string = ',';
  private SEMI_COLON_SEPARATOR: string = ';';
  private PIPE_SEPARATOR: string = '|';

  constructor() { }

  csvToJson(csv: string, separator: string = this.COMMA_SEPARATOR): string {
    if (!csv)
      return csv;

    const rows = csv.split(CsvConverterService.LINE_BREAK);
    const headerRow = rows[0];
    const headers = headerRow.split(separator);
    let result: string = CsvConverterService.OPENING_SQUARE_BRACKET;
    const size = headers.length;
    let isFirstRow = true;
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      const fields = row.split(separator);
      if (fields.length != size) {
        console.log(`row has wrong size: ${{fields:length}}. ${{row}}`);
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

  csvToXml(csv: string, separator: string = this.COMMA_SEPARATOR): string {
    if (!csv)
      return csv;

    return csv;
  }
}
