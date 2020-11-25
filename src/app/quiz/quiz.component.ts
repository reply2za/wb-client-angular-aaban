import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../services/question-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = [];
  quizId = '';
  constructor(private svc: QuestionService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      console.log('ps', ps);
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
      .then(qs => this.questions = qs);
    });

  }

}
