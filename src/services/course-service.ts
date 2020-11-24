import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/aaban/courses')
  .then(response => response.json())
  findCourseById = (cid: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/aaban/courses/${cid}`)
  .then(response => response.json())
}

