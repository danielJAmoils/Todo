import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService, private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(event){
    event.preventDefault()

    const target = event.target
    const username:string = target.querySelector('#username').value
    const password:string = target.querySelector('#password').value

    this.user.login(username, password).subscribe(data => {
      if(data.loggedIn){
        //logged in true
        this.auth.loggedIn = true
        this.router.navigate(['todo'])
      }else{
        alert(data.message)
      }
    })

  }

}
