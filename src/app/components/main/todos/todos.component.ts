import { Component, OnInit } from '@angular/core';
import { BbddTodosService } from '../../../services/bbdd-todos.service';
import { Todo } from '../../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public id = 0;

  public tareas: Todo[];

  constructor(public bbddService: BbddTodosService) {
    this.tareas = bbddService.getTodos();
   }

  ngOnInit(): void {
  }

  
  //no lo necesito se hace mas facil desde todo ya que solo es cambiar una propiedad
  /*   completeTodo(id:number): void {
    this.tareas.forEach(item => {
      if(item.id === id) item.done = true;
    });
  } */
  
  addTodo(name:string): void{
    this.id++;
    this.tareas.push(new Todo(this.id, name, false));
    this.bbddService.setTodos(this.tareas);
  }
  
  deleteTodo(id:number): void{
    this.tareas = this.tareas.filter(item => item.id != id);
  }


}
