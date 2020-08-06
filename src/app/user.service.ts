import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface loginResponse {
  loggedIn: boolean,
  message?: string
}

interface registerResponse {
  success: boolean,
  message: string
}

interface logoutResponse {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username = ""

  constructor(private http:HttpClient) { }

  login(username:string, password:string){
    return this.http.post<loginResponse>('/api/login', {
      username,
      password
    })
  }

  register(username:string, password: string){
    return this.http.post<registerResponse>('/api/register', {
      username,
      password
    })
  }

  logout(){
    return this.http.get<logoutResponse>('/api/logout')
  }
}
