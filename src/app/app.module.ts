import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import {AuthService} from './auth.service'
import {TodoGuard} from './todo.guard'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodosComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'todo',
        component: TodosComponent,
        canActivate: [TodoGuard]
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [UserService, AuthService, TodoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
