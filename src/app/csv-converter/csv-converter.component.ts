import {Component, OnInit} from '@angular/core';
import {CsvConverterService} from '../csv-converter.service';
import {OutputType, Separator} from './csvEnum';

@Component({
  selector: 'app-csv-converter',
  templateUrl: './csv-converter.component.html',
  styleUrls: ['./csv-converter.component.css']
})
export class CsvConverterComponent implements OnInit {
  inputText: string = '';
  outputText: string = '';
  private static commaExample: string = 'id,language\n1,angular\n2,react\n3,scala';
  separator: Separator = Separator.Comma;
  outputType: OutputType = OutputType.Array;

  constructor() { }

  ngOnInit(): void {
    this.onExample();
  }

  test() {
    console.log('testing logs: ')
    console.log(this.separator);
    console.log(this.outputType);
  }

  onToJson() {
    if (!this.inputText)
      return;
    this.test();

    this.outputText = CsvConverterService.csvToJson(this.inputText, this.separator);
  }

  onToXml() {
    if (!this.inputText)
      return;

    this.outputText = CsvConverterService.csvToXml(this.inputText);
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
      this.inputText = CsvConverterComponent.commaExample;
    } else if (this.separator == Separator.SemiColon) {
      console.log(2);
      this.inputText = CsvConverterComponent.commaExample.replace(/,/g, Separator.SemiColon);
    } else {
      console.log(3);
      this.inputText = CsvConverterComponent.commaExample.replace(/,/g, Separator.Pipe);
    }
  }

  onClearRight() {
    this.outputText = '';
  }
}
