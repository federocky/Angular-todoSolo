import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class BbddTodosService {

  private todos: Todo[] = [];


  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  setTodos(todos: Todo[]): void {
    this.todos = todos;
  }


}
