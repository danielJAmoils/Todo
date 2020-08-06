import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  name:string,
  notes:string
}

interface hasTodosResponse {
  exist: boolean
}

interface createTodosResponse {
  success: boolean,
  message: string
}

interface getTodosResponse {
  todos: Todo[]
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  todosExist(){
    return this.http.get<hasTodosResponse>('/api/hasTodos')
  }

  createTodos(username:string){
    return this.http.post<createTodosResponse>('/api/createTodos', {
      username
    })
  }

  getTodos(username:string){
    return this.http.get<getTodosResponse>('/api/getTodos', {[username]: username})
  }

}
