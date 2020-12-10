import {Injectable} from '@angular/core';
const url1 = 'https://node-server-aaban.herokuapp.com';
const url2 = 'http://localhost:3000';
@Injectable()
export class QuestionService {
  findQuestionsForQuiz = (qid: any) =>
    fetch(`${url1}/api/quizzes/${qid}/questions`)
    .then(response => response.json())

  findQuestionsForQuiz2 = (qid: any) =>
    fetch(`${url1}/api/quizzes-details/${qid}`)
    .then(response => response.json())
}

