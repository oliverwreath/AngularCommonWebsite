import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-diffchecker',
  templateUrl: './diffchecker.component.html',
  styleUrls: ['./diffchecker.component.css']
})
export class DiffcheckerComponent implements OnInit {
  form = new FormGroup({
    originalText: new FormControl<string>(''),
    changedText: new FormControl<string>('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onCompare() {
    console.log('onCompare begin');
    console.warn(this.form.value);
    console.log('onCompare end');
  }
}
