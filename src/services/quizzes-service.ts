import {Injectable} from '@angular/core';
const herokuUrl = 'https://node-server-aaban.herokuapp.com';
const localUrl = 'http://localhost:3008';
@Injectable()
export class QuizzesService {
  findAllQuizzes = () =>
    fetch(`${herokuUrl}/api/quizzes`)
    .then(response => response.json())
  findQuizForCourse = (qid: any) =>
    fetch(`${herokuUrl}/api/quizzes/${qid}`)
    .then(response => response.json())
  findQuestionsForQuiz = (qid: any) =>
    fetch(`${herokuUrl}/api/quizzes/${qid}/questions`)
    .then(response => response.json())
}

