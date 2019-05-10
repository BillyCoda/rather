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

  constructor(
    private weightServe: WeightLogicService
  ) { }

  ngOnInit() {
    this.options = ['yee', 'woo', 'good'];
    this.addItem();
  }

  ngDoCheck() {
    //
  }

  addItem() {
    this.options.push('');
    this.rightWeight = this.options.length;
    this.weightServe.addRight(this.rightWeight);
  }
}
