import {Injectable} from '@angular/core';
const url1 = 'https://node-server-aaban.herokuapp.com';
const url2 = 'http://localhost:3000';
@Injectable()
export class QuizzesService {
  findAllQuizzes = () =>
    fetch(`${url1}/api/quizzes`)
    .then(response => response.json())
  findQuizForCourse = (qid: any) =>
    fetch(`${url1}/api/quizzes/${qid}`)
    .then(response => response.json())
  findQuestionsForQuiz = (qid: any) =>
    fetch(`${url1}/api/quizzes/${qid}/questions`)
    .then(response => response.json())
}

