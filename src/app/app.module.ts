import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/module-service';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPilssComponent } from './topic-pills/topic-pilss.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {LessonService} from '../services/lesson-service';
import { QuizzesListComponent } from './quizzes-list/quizzes-list.component';
import {QuizzesService} from '../services/quizzes-service';
import { QuizComponent } from './quiz/quiz.component';
import {QuestionService} from '../services/question-service';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPilssComponent,
    WidgetListComponent,
    QuizzesListComponent,
    QuizComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    QuizzesService,
    QuestionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
