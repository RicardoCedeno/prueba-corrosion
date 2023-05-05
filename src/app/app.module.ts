import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { IndividualCourseComponent } from './components/individual-course/individual-course.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth'
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CoursesCategoriesComponent } from './components/courses-categories/courses-categories.component';
import { AddCourseComponent } from './components/add-course/add-course.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    IndividualCourseComponent,
    RegisterComponent,
    LoginComponent,
    CoursesCategoriesComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
