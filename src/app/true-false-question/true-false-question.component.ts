import {Component, Input, OnInit} from '@angular/core';
// import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  // Input means that the variable is being passed as a reference (with square brackets)
  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  answer = '';
  grade = (b: boolean) => this.grading = b;
  // faCheck = faCheck; faTimes = faTimes


  ngOnInit(): void {
    // console.log('test');
  }
}
