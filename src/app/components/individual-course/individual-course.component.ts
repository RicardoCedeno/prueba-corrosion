import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CoursesServiceService } from 'src/app/services/courses-service.service';

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.scss']
})
export class IndividualCourseComponent implements OnInit {
  constructor(private router:ActivatedRoute, private courseService:CoursesServiceService){}
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
      console.log(this.course)
    })
  }

}
