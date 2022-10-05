import {Component, OnInit} from '@angular/core';
import {CsvConverterService} from '../csv-converter.service';
import {CharacterCount} from './characterCount';
import {StringUtilsService} from '../string-utils.service';

@Component({
  selector: 'app-caseconverter',
  templateUrl: './caseconverter.component.html',
  styleUrls: ['./caseconverter.component.css']
})
export class CaseconverterComponent implements OnInit {
  oldText: string = '';
  private static example: string = 'Example text : Simply enter your, text and choose. the case you want to convert it to. \n 2nd row \n 3rd row \n MyCamelCaseString \n XYZMyCamelCaseString\nPDFSplitAndMergeSamples\nalllowercase';
  private static stopWords: string[] = ['and', 'to', 'the'];
  characterCountText: string = '';
  characterCount: CharacterCount = {
    CHARACTERS: 0,
    WORDS: 0,
    SENTENCES: 0,
    PARAGRAPHS: 0,
    SPACES: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.oldText = String(CaseconverterComponent.example.slice());
  }

  onUpper() {
    if (this.oldText) {
      this.oldText = this.oldText.toUpperCase();
    }
  }

  onLower() {
    console.log(this.oldText)
    if (this.oldText) {
      this.oldText = this.oldText.toLowerCase();
    }
  }

  onCapitalize() {
    if (!this.oldText)
      return;

    let rows = StringUtilsService.getRows(this.oldText);
    for (let r = 0; r < rows.length; r++) {
      if (!rows[r])
        continue;

      let words = rows[r].split(/\s+/)
      for (let w = 0; w < words.length; w++) {
        if (!words[w])
          continue;

        words[w] = words[w][0].toUpperCase() + words[w].slice(1).toLowerCase();
      }
      rows[r] = words.join(" ");
    }
    this.oldText = rows.join(CsvConverterService.LINE_BREAK);
  }

  onTitleCase() {
    if (!this.oldText)
      return;

    let rows = StringUtilsService.getRows(this.oldText);
    for (let r = 0; r < rows.length; r++) {
      if (!rows[r])
        continue;

      let s = rows[r];
      const isEndingDot =  (s.endsWith('.'));
      if (isEndingDot)
        s = s.slice(0, s.length - 1);
      let words = s.toLowerCase().split(/\s+/)
      for (let w = 0; w < words.length; w++) {
        if (!words[w])
          continue;

        if (!CaseconverterComponent.stopWords.includes(words[w])) {
          words[w] = words[w][0].toUpperCase() + words[w].slice(1).toLowerCase();
        } else {
          words[w] = words[w].toLowerCase();
        }
      }
      s = words.join(" ") + (isEndingDot?".":" ");
      rows[r] = s;
    }
    this.oldText = rows.join(CsvConverterService.LINE_BREAK);
  }

  onSentenceCase() {
    if (this.oldText) {
      this.oldText = this.oldText[0].toUpperCase() + this.oldText.slice(1).toLowerCase();
    }
  }

  onClear() {
    this.oldText = '';
  }

  onExample() {
    this.oldText = CaseconverterComponent.example;
  }

  onReverse() {
    if (!this.oldText)
      return;

    let rows = StringUtilsService.getRows(this.oldText);
    for (let r = 0; r < rows.length; r++) {
      let row = Array.from(rows[r]);
      let left = 0, right = row.length - 1;
      while (left < right) {
        const tmp = row[left];
        row[left++] = row[right];
        row[right--] = tmp;
      }
      rows[r] = row.join("");
    }
    this.oldText = rows.join(CsvConverterService.LINE_BREAK);
  }

  onUpsideDown() {
    if (!this.oldText)
      return;

    let rows = StringUtilsService.getRows(this.oldText);
    let left = 0, right = rows.length - 1;
    while (left < right) {
      const tmp = rows[left];
      rows[left++] = rows[right];
      rows[right--] = tmp;
    }
    this.oldText = rows.join(CsvConverterService.LINE_BREAK);
  }

  onTrim() {
    if (!this.oldText)
      return;

    let rows = StringUtilsService.getRows(this.oldText);
    for (let r = 0; r < rows.length; r++) {
      if (!rows[r])
        continue;

      rows[r] = rows[r].trim();
    }
    this.oldText = rows.join(CsvConverterService.LINE_BREAK);
  }

  test(callerMethod: string) {
    console.log(`${callerMethod}() testing logs: `)
    console.log(this.oldText);
    console.log(this.oldText.length);
    console.log(JSON.stringify(this.characterCount));
  }

  onCount() {
    if (!this.oldText) {
      return;
    }

    // this.test('onCount');
    this.characterCount.CHARACTERS = this.oldText.length;
    this.characterCount.WORDS = this.oldText.split(/\s+/g).length;
    this.characterCount.SENTENCES = this.oldText.split('.').length;
    const rows = StringUtilsService.getRows(this.oldText);
    let pargraphCounter = 0, isReadyForNewParagraph = true;
    for (let row of rows) {
      if (!row || row.trim().length === 0) {
        isReadyForNewParagraph = true;
        continue;
      }

      if (isReadyForNewParagraph) {
        pargraphCounter++;
        isReadyForNewParagraph = false;
      }
    }
    this.characterCount.PARAGRAPHS = pargraphCounter;
    this.characterCount.SPACES = (this.oldText.match(/ +/g) || []).length;
    this.characterCountText = JSON.stringify(this.characterCount);
  }

  onUnderscoreToCamelCase() {
    if (!this.oldText) {
      return;
    }

    let rows = StringUtilsService.getRows(this.oldText);
    for (let r = 0; r < rows.length; r++) {
      if (!rows[r]) {
        continue;
      }

      rows[r] = StringUtilsService.getCamelCase(rows[r].split('_'));
    }
    this.oldText = rows.join(CsvConverterService.LINE_BREAK);
  }

  onCamelCaseToUnderscore() {
    if (!this.oldText) {
      return;
    }

    let rows = StringUtilsService.getRows(this.oldText);
    for (let r = 0; r < rows.length; r++) {
      if (!rows[r]) {
        continue;
      }

      rows[r] = StringUtilsService.getUnderscoreFromCamelCase(rows[r].split('_'));
    }
    this.oldText = rows.join(CsvConverterService.LINE_BREAK);
  }
}
