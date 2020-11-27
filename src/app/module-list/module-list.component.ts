import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules: any;
  moduleId = '';
  courseId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleService) { }

  ngOnInit(): void {
    // Register the activated route - subscribe to event changes
    this.activatedRoute.params.subscribe(params => {
      // console.log('Params', params);
      this.courseId = params.courseId;
      if (this.courseId !== 'undefined' && this.courseId !== '') {
        this.moduleService.findModulesForCourseId(this.courseId)
          .then(modules => this.modules = modules);
      }
      if (this.moduleId !== 'undefined') {
        this.moduleId = params.moduleId;
      }
    });
  }

}
