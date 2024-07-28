import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo, AddTodo } from './model/todo.model';

@State<Todo[]>({
  name: 'todos',
  defaults: []
})
@Injectable()
export class TodoState {
  @Selector()
  static getTodos(state: Todo[]) {
    return state;
  }

  @Action(AddTodo)
  add(ctx: StateContext<Todo[]>, action: AddTodo) {
    const state = ctx.getState();
    ctx.setState([...state, action.payload]);
  }
}
