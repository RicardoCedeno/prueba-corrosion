import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import {FormsModule} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserServiceService, private router:Router){
  }
  ngOnInit(): void {

  }

  email:string
  password:string



  onSubmit(){
    this.userService.register(this.email, this.password)
    .then(response=>{
      console.log(response)
      this.router.navigate(['/inicio-de-sesion'])

    })
    .catch(error=>console.log(error))
  }


}
