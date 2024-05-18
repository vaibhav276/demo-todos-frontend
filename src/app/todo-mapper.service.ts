import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoDto } from './todo-dto';

@Injectable({
  providedIn: 'root'
})
export class TodoMapperService {

  constructor() { }

  mapToDto(todo: Todo, todoDto: TodoDto): TodoDto {
    todoDto.todo_id = todo.todo_id.length > 0 ? todo.todo_id : '';
    todoDto.title = todo.title;
    todoDto.description = todo.description;
    const due_date = new Date(todo.due_date);
    const isoDateString = due_date.toISOString();
    const index = isoDateString.lastIndexOf(':');
    todoDto.due_date = isoDateString.slice(0, index);
    todoDto.done = todo.done;

    return todoDto;
  }

  mapToModel(todoDto: TodoDto, todo: Todo): Todo {
    todo.todo_id = todoDto.todo_id || '';
    todo.title = todoDto.title || '';
    todo.description = todoDto.description || '';
    todo.due_date = todoDto.due_date ? new Date(todoDto.due_date) : new Date();
    todo.done = todoDto.done || false;

    return todo;
  }
}
