import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todos:TodosService, private user:UserService) { }

  ngOnInit(): void {
    this.todos.todosExist().subscribe(response => {
      if(response.exist === true){
        alert("A todo collection for this user already exists")
      }else{
        this.todos.createTodos(this.user.username).subscribe(response => {
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
