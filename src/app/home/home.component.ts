import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TododetailsComponent } from '../tododetails/tododetails.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoitemComponent, TododetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todoService: TodoService = inject(TodoService);
  overdueTodos: Todo[] = [];
  todayTodos: Todo[] = [];
  tomorrowTodos: Todo[] = [];
  laterTodos: Todo[] = [];

  selectedTodo!: Todo;

  blankTodo: Todo = {
    id: '',
    title: 'Something new',
    description: 'Description of the awesomeness...',
    due_date: new Date(),
    done: false
  };

  editing: boolean = true;
  creating: boolean = false;

  constructor() {
    this.overdueTodos = this.todoService.getOverdue();
    this.todayTodos = this.todoService.getToday();
    this.tomorrowTodos = this.todoService.getTomorrow();
    this.laterTodos = this.todoService.getLater();

    this.initCreationFlow();
  }

  selectTodo(todo: Todo) {
    this.selectedTodo = todo;
    this.editing = true;
    this.creating = false;
  }

  initCreationFlow() {
    this.selectedTodo = this.blankTodo;
    this.editing = false;
    this.creating = true;
  }
}