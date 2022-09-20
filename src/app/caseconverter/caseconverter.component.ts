import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caseconverter',
  templateUrl: './caseconverter.component.html',
  styleUrls: ['./caseconverter.component.css']
})
export class CaseconverterComponent implements OnInit {
  oldText: string = 'Example text : Simply enter your, text and choose. the case you want to convert it to. ';
  private static example: string = 'Example text : Simply enter your, text and choose. the case you want to convert it to. ';
  private static stopWords: string[] = ["and", "to", "the"];

  constructor() { }

  ngOnInit(): void {
  }

  onUpper() {
    if (this.oldText) {
      this.oldText = this.oldText.toUpperCase();
    }
  }

  onLower() {
    if (this.oldText) {
      this.oldText = this.oldText.toLowerCase();
    }
  }

  onCapitalize() {
    if (this.oldText) {
      let words = this.oldText.trim().split(/\s+/)
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
      this.oldText = words.join(" ");
    }
  }

  onTitleCase() {
    if (this.oldText) {
      let s = this.oldText.trim();
      const isEndingDot =  (s.endsWith('.'));
      if (isEndingDot)
        s = s.slice(0, s.length - 1);
      let words = s.toLowerCase().split(/\s+/)
      for (let i = 0; i < words.length; i++) {
        if (!CaseconverterComponent.stopWords.includes(words[i])) {
          console.log('1 ' + words[i])
          words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        } else {
          console.log('2 ' + words[i])
          words[i] = words[i].toLowerCase();
        }
      }
      s = words.join(" ") + (isEndingDot?".":" ");
      this.oldText = s;
    }
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
}
