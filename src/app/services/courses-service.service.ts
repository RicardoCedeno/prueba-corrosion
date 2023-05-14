import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs'
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8080/cursos/todos-los-cursos";
  private urlIndividualCourse="http://localhost:8080/cursos/"
  private urlCategoryCourses="http://localhost:8080/cursos/categorias/"
  private urlPostCourse="http://localhost:8080/cursos/agregar-curso"
  private urlDeleteCourse="http://localhost:8080/cursos/eliminar-curso/"
  private urlPutCourse="http://localhost:8080/cursos/actualizar-curso"

  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.url)
  }

  getACourse(nameCourse:string | null):Observable<Course>{
    return this.http.get<Course>(this.urlIndividualCourse + nameCourse)
  }

  getCoursesByCategory(courseCategory:string | null):Observable<Course[]>{
    return this.http.get<Course[]>(this.urlCategoryCourses + courseCategory)
  }

  //solicitud post

  postACourse(course:Course):Observable<Object>{
    return this.http.post(this.urlPostCourse, course)
  }

  //solicitud delete

  deleteCourse(coursename:string | null){
    return this.http.delete(this.urlDeleteCourse + coursename);

  }

  //solicitud put
  
  putCourse(Course:Course):Observable<Object>{
    return this.http.put(this.urlPutCourse, Course)
  }

  

}
