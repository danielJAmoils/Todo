import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private user: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(event){
    event.preventDefault()

    const target = event.target
    const username:string = target.querySelector('#username').value
    const password:string = target.querySelector('#password').value
    const cPassword:string = target.querySelector('#cPassword').value

    //make sure details work
    let errors = 0

    if(password !== cPassword){
      errors += 1
      alert("Passwords do not match")
    }//add more checks

    if(errors === 0){
      this.user.register(username, password).subscribe(data => {
        if(data.success){
          this.router.navigate(['login'])
        }else{
          alert(data.message)
        }
      })
    }

  }

}
