import { Component, OnInit, DoCheck } from "@angular/core";
import { WeightLogicService } from "src/app/services/weight-logic.service";

@Component({
  selector: "app-opt-one",
  templateUrl: "./opt-one.component.html",
  styleUrls: ["./opt-one.component.css"]
})
export class OptOneComponent implements OnInit, DoCheck {
  private options: string[];
  leftWeight: number;
  newItem: string;

  constructor(private weightServe: WeightLogicService) {}

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
      this.leftWeight = this.options.length;
      this.weightServe.addLeft(this.leftWeight);
    }
  }
}
