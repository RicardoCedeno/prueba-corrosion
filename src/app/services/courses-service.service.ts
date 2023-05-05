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

  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.url)
  }

  getACourse(nameCourse:string | null):Observable<Course>{
    return this.http.get<Course>(this.urlIndividualCourse + nameCourse)
  }
  

}
