import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TodoGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.auth.loggedIn);
      
      if(this.auth.loggedIn){
        return true
      }
      return this.auth.isLoggedIn().pipe(map(res => {
        console.log(res.loggedIn)
        if(res.loggedIn){
          this.auth.loggedIn = true
          return true
        }else{
          this.router.navigate(['login'])
          return false
        }
      }))
  }
  
}
