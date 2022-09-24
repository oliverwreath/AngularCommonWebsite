import {Component, OnInit} from '@angular/core';
import {StringUtilsService} from '../string-utils.service';

@Component({
  selector: 'app-diffchecker',
  templateUrl: './diffchecker.component.html',
  styleUrls: ['./diffchecker.component.css']
})
export class DiffcheckerComponent implements OnInit {
  oldTextContents: string = '';
  newTextContents: string = '';
  isHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.onExample();
  }

  onCompare() {
    console.warn(this.oldTextContents);
    if (this.oldTextContents && this.newTextContents) {
      this.isHidden = !this.isHidden;
    }
  }

  toLowerCase() {
    this.oldTextContents = StringUtilsService.toLowerCase(this.oldTextContents);
    this.newTextContents = StringUtilsService.toLowerCase(this.newTextContents);
  }

  removeExcessiveWhiteSpace() {
    console.log('removeExcessiveWhiteSpace()')
    console.log(`this.oldTextContents = ${this.oldTextContents}`)
    console.log(`this.newTextContents = ${this.newTextContents}`)
    this.oldTextContents = StringUtilsService.removeExcessiveWhiteSpace(this.oldTextContents);
    this.newTextContents = StringUtilsService.removeExcessiveWhiteSpace(this.newTextContents);
    console.log(`this.oldTextContents = ${this.oldTextContents}`)
    console.log(`this.newTextContents = ${this.newTextContents}`)
  }

  sortLines() {
    this.oldTextContents = StringUtilsService.sortLines(this.oldTextContents);
    this.newTextContents = StringUtilsService.sortLines(this.newTextContents);
  }

  replaceLineBreaksWithSpaces() {
    this.oldTextContents = StringUtilsService.replaceLineBreaksWithSpaces(this.oldTextContents);
    this.newTextContents = StringUtilsService.replaceLineBreaksWithSpaces(this.newTextContents);
  }

  private onExample() {
    this.oldTextContents = 'This part of the\n' +
      'document has stayed the\n' +
      'same from version to\n' +
      'version.  It shouldn\'t\n' +
      'be shown if it doesn\'t\n' +
      'change.  Otherwise, that\n' +
      'would not be helping to\n' +
      'compress the size of the\n' +
      'changes.\n' +
      '\n' +
      'This      paragraph contains\n' +
      'text that is outdated.\n' +
      'It will be deleted in the\n' +
      'near future.\n' +
      '\n' +
      'It is important to spell\n' +
      'check this dokument. On\n' +
      'the other hand, a\n' +
      'misspelled word isn\'t\n' +
      'the end of the world.\n' +
      'Nothing in the rest of\n' +
      'this paragraph needs to\n' +
      'be changed. Things can\n' +
      'be added after it.';
    this.newTextContents = 'This is an important\n' +
      'notice!     It should\n' +
      'therefore be added at\n' +
      'the beginning of this\n' +
      'document!\n' +
      '\n' +
      'This part of the\n' +
      'document has stayed the\n' +
      'same from version to\n' +
      'version.  It shouldn\'t\n' +
      'be shown if it doesn\'t\n' +
      'change.  Otherwise, that\n' +
      'would not be helping to\n' +
      'compress the size of the\n' +
      'changes.\n' +
      '\n' +
      'It is important to spell\n' +
      'check this document. On\n' +
      'the other hand, a\n' +
      'misspelled word isn\'t\n' +
      'the end of the world.\n' +
      'Nothing in the rest of\n' +
      'this paragraph needs to\n' +
      'be changed. Things can\n' +
      'be added after it.\n' +
      '\n' +
      'This paragraph contains\n' +
      'important new additions\n' +
      'to this document.';
  }
}
