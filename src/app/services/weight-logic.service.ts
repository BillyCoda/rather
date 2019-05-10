import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeightLogicService {
  weightedValue: number;
  leftValue: number;
  rightValue: number;
  // additions need to be actually weighted and balanced

  constructor() {
    this.avgMeter();
  }

  avgMeter() {
    this.weightedValue = 0;
  }

  addLeft(leftValue: number) {
    this.weightedValue -= leftValue;
    console.log(this.weightedValue);

  }

  addRight(rightValue: number) {
    this.weightedValue += rightValue;
    console.log(this.weightedValue);
  }
}
