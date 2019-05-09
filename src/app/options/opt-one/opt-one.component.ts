import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-one',
  templateUrl: './opt-one.component.html',
  styleUrls: ['./opt-one.component.css']
})
export class OptOneComponent implements OnInit {
  options: string[];

  constructor() { }

  ngOnInit() {
    this.options = ['yee', 'woo', 'good'];
  }

  addItem() {
    this.options.push('');
  }

}
