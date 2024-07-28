export interface Todo {
  id: number;
  text: string;
}

export class AddTodo {
  static readonly type = '[TODO] Add';
  constructor(public payload: Todo) {}
}