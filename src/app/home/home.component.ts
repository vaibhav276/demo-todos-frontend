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

  testTodo: Todo = {
    id: '01HY053FQRAMBR3STSPPHAMCA0',
    title: 'Test todo with a very long title',
    description: 'Test description dfkldjklf asldf asldkfjasldf aslkdf \n\n ksdfkdj k askdfhdk',
    due_date: new Date('2024-05-31'),
    done: false
  }

  constructor() {
    this.overdueTodos = this.todoService.getOverdue();
    this.todayTodos = this.todoService.getToday();
    this.tomorrowTodos = this.todoService.getTomorrow();
    this.laterTodos = this.todoService.getLater();
  }
}
