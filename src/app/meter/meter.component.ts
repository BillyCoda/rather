import { Component, OnInit, DoCheck } from '@angular/core';
import { WeightLogicService } from '../services/weight-logic.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit, DoCheck {
  position: number;
  positionStyle: string;

  constructor(
    private weightServe: WeightLogicService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.position = this.weightServe.weightedValue;
    this.positionStyle = 'translateX(' + this.position + 'em)';
  }

}
