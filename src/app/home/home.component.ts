import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style = false;
  users!: any;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(response => {
        this.users = response;
        console.log(this.users);
      }
    );
  }

  firstClick() {
    this.data.firstClick();
  }
}
