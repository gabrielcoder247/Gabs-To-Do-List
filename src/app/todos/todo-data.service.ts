import { Injectable } from '@angular/core';
import {Todo} from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // placeholder for last id so we can simulate
  // automatic increamenting of id's
  lastId = 0;

  //placeholder for todo's
  todos: Todo[]=[];

  constructor() { }

  //simulate POST/todos
  addTodo(todo:Todo):TodoDataService{
    if (!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  //simulate Delete/todos/:id
  deleteTodoById(id:number):TodoDataService{
    this.todos = this.todos
    .filter(todo =>todo.id !==id);
    return this;
  }
  

  
}
