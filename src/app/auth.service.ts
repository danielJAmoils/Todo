import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface loggedInResponse {
  loggedIn: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false

  constructor(private http: HttpClient) { }

  isLoggedIn(){
    return this.http.get<loggedInResponse>('api/isLoggedIn')
  }
}
