import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { IndividualCourseComponent } from './components/individual-course/individual-course.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    IndividualCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
