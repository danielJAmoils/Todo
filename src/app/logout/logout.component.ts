import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router:Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.user.logout().subscribe(data => {
      if(data.success){
        this.auth.loggedIn = false
        this.router.navigate([''])
      }else{
        alert("An error occurred while logging out")
      }
    })
  }

}
