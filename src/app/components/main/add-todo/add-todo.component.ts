import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  @Output() agrega: EventEmitter<string> = new EventEmitter();

  public nombre:string;

  constructor() {   }

  ngOnInit(): void {
  }

  agregaTodo(){
    this.agrega.emit(this.nombre);
    this.nombre = '';
  }

}
