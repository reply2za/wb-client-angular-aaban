import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourseId = (courseId: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/aaban/modules/${courseId}/modules`)
    .then(response => response.json())
  findModulesForCourse = (course: { _id: any; }) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/aaban/modules/${course._id}/modules`)
    .then(response => response.json())
  createModuleForCourse = (course: { _id: any; }) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/aaban/modules/${course._id}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
  deleteModule = (module: { _id: any; }) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/aaban/modules/${module._id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
}
