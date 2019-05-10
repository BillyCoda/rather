import { Component, OnInit, DoCheck } from '@angular/core';
import { WeightLogicService } from 'src/app/services/weight-logic.service';

@Component({
  selector: 'app-opt-two',
  templateUrl: './opt-two.component.html',
  styleUrls: ['./opt-two.component.css']
})
export class OptTwoComponent implements OnInit, DoCheck {
  private options: string[];
  rightWeight: number;
  newItem: string;

  constructor(
    private weightServe: WeightLogicService
  ) { }

  ngOnInit() {
    this.options = [];
    this.addItem();
  }

  ngDoCheck() {
    //
  }

  addItem() {
    if (!!this.newItem) {
      this.options.push(this.newItem);
      this.rightWeight = this.options.length;
      this.weightServe.addRight(this.rightWeight);
    }
  }
}
