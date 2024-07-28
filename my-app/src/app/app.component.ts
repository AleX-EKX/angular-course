import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddTodo, Todo } from '../store/model/todo.model';
import { TodoState } from '../store/todo.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Select(TodoState.getTodos) todos$!: Observable<Todo[]>;

  newTodoText: string = '';
  nextId: number = 1;

  constructor(private store: Store) {}

  ngOnInit() {

    this.todos$.subscribe(todos => {
      console.log(todos);
      this.nextId;
    });
  }

  addTodo() {
    if (this.newTodoText.trim()) {
      const newTodo: Todo = {
        id: this.nextId,
        text: this.newTodoText
      };
      this.store.dispatch(new AddTodo(newTodo));
      this.newTodoText = '';
      this.nextId++;
    }
  }

}
