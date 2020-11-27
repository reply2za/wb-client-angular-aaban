import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/lesson-service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {



  lessons: any;
  courseId = '';
  moduleId = '';
  lessonId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log('ParamsLessons', params);
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      if (this.moduleId !== 'undefined' && this.moduleId !== '') {
        this.lessonService.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
      }
      if (typeof this.lessonId !== 'undefined') {
        this.lessonId = params.lessonId;
      }
      // console.log('LESSONS', params);
    });
  }

}
