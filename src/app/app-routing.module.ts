import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { IndividualCourseComponent } from './components/individual-course/individual-course.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { CoursesCategoriesComponent } from './components/courses-categories/courses-categories.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  {component: CoursesComponent, path:'cursos'},
  {component: IndividualCourseComponent, path: 'cursos/:nameCourse', ...canActivate(()=>redirectUnauthorizedTo(['/inicio-de-sesion'])) },
  {component:RegisterComponent, path:'registrarse'},
  {component: LoginComponent, path:'inicio-de-sesion'},
  {component: CoursesCategoriesComponent, path: 'cursos/categorias/:categoryCourse'},
  {component: AddCourseComponent, path:'agregar-curso', ...canActivate(()=>redirectUnauthorizedTo(['/inicio-de-sesion']))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
