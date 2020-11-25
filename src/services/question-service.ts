import {Injectable} from '@angular/core';

@Injectable()
export class QuestionService {
  findQuestionsForQuiz = (qid: any) =>
    fetch(`http://localhost:3008/api/quizzes/${qid}/questions`)
    .then(response => response.json())
}

