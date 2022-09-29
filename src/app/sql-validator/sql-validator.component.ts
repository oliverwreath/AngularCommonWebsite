import {Component, OnInit} from '@angular/core';
import {OutputType, Separator} from '../csv-converter/csvEnum';
import {StringUtilsService} from '../string-utils.service';

@Component({
  selector: 'app-sql-validator',
  templateUrl: './sql-validator.component.html',
  styleUrls: ['./sql-validator.component.css']
})
export class SqlValidatorComponent implements OnInit {
  inputText: string = '';
  outputText: string = '';
  private static commaExample: string = 'SELECT\n' +
    '  *\n' +
    'FROM\n' +
    '  test_table tbl1\n' +
    'GROUP BY\n' +
    '  tbl1.name\n';
  separator: Separator = Separator.Comma;
  outputType: OutputType = OutputType.Array;
  isFirstColumnNotEmpty: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.onExample();
  }

  validate() {
    if (!this.inputText)
      return;
    this.test();

    this.outputText = StringUtilsService.validateSQL(this.inputText, this.separator, this.isFirstColumnNotEmpty);
  }

  test() {
    console.log('testing logs: ')
    console.log(this.separator);
    console.log(this.outputType);
  }

  onClear() {
    this.inputText = '';
    this.outputText = '';
  }

  onExample() {
    this.inputText = '';
    console.log(this.separator);
    if (this.separator == Separator.Comma) {
      console.log(1);
      this.inputText = SqlValidatorComponent.commaExample;
    } else if (this.separator == Separator.SemiColon) {
      console.log(2);
      this.inputText = SqlValidatorComponent.commaExample.replace(/,/g, Separator.SemiColon);
    } else {
      console.log(3);
      this.inputText = SqlValidatorComponent.commaExample.replace(/,/g, Separator.Pipe);
    }
  }

  onClearRight() {
    this.outputText = '';
  }

  onFileChange(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log(file);
      const stringPromise: Promise<string> = file.text();
      console.log(stringPromise);
      stringPromise.then(
        (value: string) => this.inputText = value
      ).catch(
        (reason) => console.log(reason)
      )
    }
  }
}
