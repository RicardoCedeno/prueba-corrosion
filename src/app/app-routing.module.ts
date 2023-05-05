import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { IndividualCourseComponent } from './components/individual-course/individual-course.component';

const routes: Routes = [
  {component: CoursesComponent, path:'cursos'},
  {component: IndividualCourseComponent, path: 'cursos/:nameCourse'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
