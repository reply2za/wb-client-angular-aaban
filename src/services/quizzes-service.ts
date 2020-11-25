import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesService {
  findAllQuizzes = () =>
    fetch('http://localhost:3008/api/quizzes')
    .then(response => response.json())
  findQuizForCourse = (qid: any) =>
    fetch(`http://localhost:3008/api/quizzes/${qid}`)
    .then(response => response.json())
  findQuestionsForQuiz = (qid: any) =>
    fetch(`http://localhost:3008/api/quizzes/${qid}/questions`)
    .then(response => response.json())
}

