import {Injectable} from '@angular/core';
const herokuUrl = 'https://node-server-aaban.herokuapp.com';
@Injectable()
export class QuestionService {
  findQuestionsForQuiz = (qid: any) =>
    fetch(`${herokuUrl}/api/quizzes/${qid}/questions`)
    .then(response => response.json())
}

