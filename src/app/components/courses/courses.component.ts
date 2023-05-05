import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CoursesServiceService } from 'src/app/services/courses-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor(private coursesService:CoursesServiceService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.getCourses()
  }

  listElements=['Todos los cursos','Frontend', 'Backend', 'Ciencia de datos', 'Bases de datos', 'Diseño', 'Inglés']

  courses:Course[]=[]

  getCourses(){
    this.coursesService.getAllCourses().subscribe(data=>{
      this.courses=data
      console.log(this.courses)
    })
  }

  getNameCourse(nameCourse: String){
    var selectedNameCourse=nameCourse
    console.log(selectedNameCourse)
    this.router.navigate(['cursos', selectedNameCourse])
  }






}
