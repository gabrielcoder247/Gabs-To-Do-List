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
  //simulate POST/todos
  addTodo(todo:Todo):todoDataService{
    if (!todo.id){
      todo.id = ++this.lastId;
    }
  }

  constructor() { }
}
