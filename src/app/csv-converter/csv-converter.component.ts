import {Component, OnInit} from '@angular/core';
import {CsvConverterService} from '../csv-converter.service';

@Component({
  selector: 'app-csv-converter',
  templateUrl: './csv-converter.component.html',
  styleUrls: ['./csv-converter.component.css']
})
export class CsvConverterComponent implements OnInit {
  inputText: string = '';
  outputText: string = '';
  private static example: string = 'id,language\n1,angular\n2,react\n3,scala';

  constructor(private csvConverterService: CsvConverterService) { }

  ngOnInit(): void {
    this.inputText = CsvConverterComponent.example;
  }

  onToJson() {
    if (!this.inputText)
      return;

    this.outputText = this.csvConverterService.csvToJson(this.inputText);
  }

  onToXml() {
    if (!this.inputText)
      return;

    this.outputText = this.csvConverterService.csvToXml(this.inputText);
  }

  onClear() {
    this.inputText = '';
    this.outputText = '';
  }

  onExample() {
    this.inputText = CsvConverterComponent.example;
  }
}
