import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.scss']
})
export class IndividualCourseComponent implements OnInit {
  constructor(private router:ActivatedRoute, private courseService:CoursesServiceService, private routerNav:Router){}
  ngOnInit(): void {
    this.getACourse()

  }

  getnameCourse(){
    this.router.snapshot.paramMap.get('nameCourse')
  }

  nameCourse:string | null

  course:Course

  getACourse(){
    this.nameCourse=this.router.snapshot.paramMap.get('nameCourse')
    this.courseService.getACourse(this.nameCourse).subscribe(data=>{
      this.course=data;
    })
  }

  deleteCourse(){
    this.nameCourse=this.router.snapshot.paramMap.get('nameCourse')
    this.courseService.deleteCourse(this.nameCourse).subscribe(data=>{
    })
    this.routerNav.navigate(['/cursos'])
  }

  courseName:string;
  idCourse:number;
  categoryCourse:string;
  hoursCourse:number;
  contentCourse:string[];
  imageCourse:string;
  teacherCourse:string;


  updatedCourse:Course = new Course()
  putCourse(){
    this.updatedCourse.nameCourse=this.courseName
    this.updatedCourse.categoryCourse=this.categoryCourse
    this.updatedCourse.contentCourse=this.contentCourse
    this.updatedCourse.idCourse=this.course.idCourse
    this.updatedCourse.imageCourse=this.imageCourse
    this.updatedCourse.teacherCourse=this.teacherCourse

    console.log(this.updatedCourse)

    this.courseService.putCourse(this.updatedCourse).subscribe(data=>{
    })

    this.routerNav.navigate(['/cursos'])
  }



}
