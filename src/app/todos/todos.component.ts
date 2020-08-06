import { Component, OnInit } from '@angular/core';
import { TodosService, Todo } from '../todos.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoCollection:Todo[]

  constructor(private todos:TodosService, private user:UserService) { }

  ngOnInit(): void {
    this.todos.todosExist().subscribe(response => {
      if(response.exist === true){
        this.todos.getTodos().subscribe(response => {
          this.todoCollection = response.todos
        })
      }else{
        this.todos.createTodos().subscribe(response => {
          if(!response.success){
            alert('something went wrong')
          }else{
            alert('todo collection created')
          }
        })
      }
    })
  }

}
