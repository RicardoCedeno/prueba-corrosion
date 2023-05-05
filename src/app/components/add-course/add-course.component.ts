import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  course:Course=new Course();
  constructor(private coursesService:CoursesServiceService, private router:Router ){}
  ngOnInit(): void {
  }


  saveCourse(){
    this.coursesService.postACourse(this.course).subscribe(data=>{
      console.log("datos" + data)
      console.log("datos: " + this.course)
      this.router.navigate(['/cursos'])
    })
  }

}
