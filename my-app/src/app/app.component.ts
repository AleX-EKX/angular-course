import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AddTodo, Todo } from '../store/model/todo.model';
import { TodoState } from '../store/todo.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Select(TodoState.getTodos) todos$!: Observable<Todo[]>;
  todos: Todo[] = [];
  newTodoText: string = '';
  nextId: number = 1;

  private todosSubscription: Subscription = new Subscription();

  constructor(private store: Store) {}

  ngOnInit() {
    this.todosSubscription.add(
      this.todos$.subscribe(todos => {
        this.todos = todos;
        
        if (todos.length > 0) {
          this.nextId;
        } else {
          this.nextId = 1;
        }
        console.log(todos);
      })
    );
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
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
