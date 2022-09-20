import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-diffchecker',
  templateUrl: './diffchecker.component.html',
  styleUrls: ['./diffchecker.component.css']
})
export class DiffcheckerComponent implements OnInit {
  form = new FormGroup({
    oldText: new FormControl<string>(''),
    newText: new FormControl<string>('')
  })
  // oldTextContents: string = '';
  // newTextContents: string = '';
  isHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {  }

  onCompare() {
    console.log('onCompare begin');
    console.warn(this.form.value);
    if (this.form.value.oldText && this.form.value.newText) {
      // this.oldTextContents = this.form.value.oldText;
      // this.newTextContents = this.form.value.newText;
      this.isHidden = false;
    }
    console.log('onCompare end');
  }
}
