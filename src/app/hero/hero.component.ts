import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
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
