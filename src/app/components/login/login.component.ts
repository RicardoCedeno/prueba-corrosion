import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userService:UserServiceService, private router:Router){}
  ngOnInit(): void {
    
  }

  email:string
  password:string

  onSubmit(){
    console.log(this.email, this.password)
    this.userService.login(this.email, this.password)
    .then(response=>{
      console.log(response)
      this.router.navigate(['/cursos'])
      
    })
    .catch(error=>console.log(error))

  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(response=>{
      console.log(response)
      this.router.navigate(['/cursos'])
    })
    .catch(error=>console.log(error))
  }

}
