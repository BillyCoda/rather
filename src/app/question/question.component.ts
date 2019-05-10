import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionSubmitted: boolean;
  question: string;
  questionBig: string;

  constructor() {}

  ngOnInit() {
    this.questionSubmitted = false;
  }

  submitQuestion() {
    this.questionBig = this.question;
    this.questionSubmitted = true;
  }
}
