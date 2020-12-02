import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

// import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  // Input means that the variable is being passed as a reference (with square brackets)
  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };
  grading = false;
  answer = '';
  faCheck = faCheck;
  faTimes = faTimes;

  grade = (b: boolean) => this.grading = b;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   console.log('multipleChoiceParams', params);
    // });
  }

}
