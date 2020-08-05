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

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
