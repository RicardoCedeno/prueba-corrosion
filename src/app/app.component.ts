import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private userService:UserServiceService, private router:Router){}
  ngOnInit(): void {
    this.router.navigate(['/cursos'])
    
  }
  title = 'courses-frontend';
  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/cursos'])
    })
    .catch(error=>console.log(error))
  }
}
