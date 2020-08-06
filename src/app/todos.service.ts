import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface hasTodosResponse {
  exist: boolean
}

interface createTodosResponse {
  success: boolean,
  message: string
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

}
