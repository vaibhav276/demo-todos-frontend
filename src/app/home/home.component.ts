import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TodoListComponent,
    TodoDetailsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todoService: TodoService = inject(TodoService);
  todos!: Todo[];
  selectedTodo!: Todo;

  blankTodo: Todo = {
    id: '',
    title: 'Something new',
    description: 'Description of the awesomeness...',
    due_date: new Date(),
    done: false
  };

  creating: boolean = false;

  constructor() {
    this.todos = this.todoService.getTodos();
    this.initCreationFlow();
  }

  selectTodo(todo: Todo) {
    this.selectedTodo = todo;
    this.creating = false;
  }

  initCreationFlow() {
    this.selectedTodo = this.blankTodo;
    this.creating = true;
  }
}
