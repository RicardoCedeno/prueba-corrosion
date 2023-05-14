import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.scss']
})
export class CoursesCategoriesComponent implements OnInit {
  constructor(private coursesService:CoursesServiceService, private router:Router, private route:ActivatedRoute, private location:Location){}
  ngOnInit(): void {
   this.getCoursesByCategory()
    
  }

  listElements=['Todos los cursos','Frontend', 'Backend', 'Ciencia de datos', 'Bases de datos', 'Diseño', 'Inglés']

  selectedElement:string

  courses:Course[]=[]

  getCoursesByCategory(){
    var categoryCourse=this.route.snapshot.paramMap.get('categoryCourse')
    console.log(categoryCourse)
    this.coursesService.getCoursesByCategory(categoryCourse).subscribe(data=>{
      console.log(data)
      this.courses=data;
    })
  }

  getNameCourse(nameCourse: String){
    var selectedNameCourse=nameCourse
    console.log(selectedNameCourse)
    this.router.navigate(['cursos', selectedNameCourse])
  }

  onOptionSelected(event:any){
    this.selectedElement=event.target.value;
    this.router.navigate(['/cursos/categorias/' + this.selectedElement]);

  }

}
