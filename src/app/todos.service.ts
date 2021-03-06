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

interface createTodoResponse {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  todosExist(){
    return this.http.get<hasTodosResponse>('/api/hasTodos')
  }

  createTodos(){
    return this.http.post<createTodosResponse>('/api/createTodos', {})
  }

  getTodos(){
    return this.http.get<getTodosResponse>('/api/getTodos')
  }

  createTodo(todo:Todo){
    return this.http.post<createTodoResponse>('/api/createTodo', {
      todo
    })
  }

}
