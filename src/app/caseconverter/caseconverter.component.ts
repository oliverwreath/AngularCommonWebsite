import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caseconverter',
  templateUrl: './caseconverter.component.html',
  styleUrls: ['./caseconverter.component.css']
})
export class CaseconverterComponent implements OnInit {
  oldText: string = '';
  private static example: string = 'Example text : Simply enter your, text and choose. the case you want to convert it to. \n 2nd row \n 3rd row';
  private static stopWords: string[] = ["and", "to", "the"];

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

    let rows = this.oldText.split('\n');
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
    this.oldText = rows.join('\n');
  }

  onTitleCase() {
    if (!this.oldText)
      return;

    let rows = this.oldText.split('\n');
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
    this.oldText = rows.join('\n');
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

    let rows = this.oldText.split('\n');
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
    this.oldText = rows.join('\n');
  }

  onUpsideDown() {
    if (!this.oldText)
      return;

    let rows = this.oldText.split('\n');
    let left = 0, right = rows.length - 1;
    while (left < right) {
      const tmp = rows[left];
      rows[left++] = rows[right];
      rows[right--] = tmp;
    }
    this.oldText = rows.join('\n');
  }

  onTrim() {
    if (!this.oldText)
      return;

    let rows = this.oldText.split('\n');
    for (let r = 0; r < rows.length; r++) {
      if (!rows[r])
        continue;

      rows[r] = rows[r].trim();
    }
    this.oldText = rows.join('\n');
  }
}
