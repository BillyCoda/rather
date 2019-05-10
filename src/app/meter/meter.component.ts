import { Component, DoCheck, OnInit } from '@angular/core';
import { WeightLogicService } from '../services/weight-logic.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit, DoCheck {
  position: number;
  positionStyle: string;

  constructor(private weightServe: WeightLogicService) {}

  ngOnInit() {}

  ngDoCheck() {
    let offset = this.position;
    offset = this.weightServe.weightedValue;
    console.log(offset);

    if (offset < 50 && offset > -50) {
      this.positionStyle = 'translateX(' + offset + 'rem)';
    } else if (offset >= 50) {
      this.positionStyle = 'translateX(59.5rem)';
      // glo up right
    } else  {
      this.positionStyle = 'translateX(-59.5rem)';
      // glo up left
    }
  }
}
