import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoDto } from '../todo-dto';
import { DateUtilService } from '../date-util.service';

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
  todos: Todo[] = [];
  selectedTodo?: Todo;

  dateUtilService: DateUtilService = inject(DateUtilService);

  blankTodo: Todo = {
    todo_id: '',
    title: 'Something new',
    description: 'Description of the awesomeness...',
    due_date: this.dateUtilService.getFutureDate(1),
    done: false
  };

  creating: boolean = false;

  ngOnInit() {
    this.getTodos();
  }

  constructor() {
    this.initCreationFlow();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = [];
      for (let t of data.todos) {
        this.todos.push({
          todo_id: t.todo_id,
          title: t.title,
          description: t.description,
          due_date: new Date(t.due_date),
          done: t.done
        });
      }
    });
  }

  selectTodo(todo: Todo) {
    this.selectedTodo = todo;
    this.creating = false;
  }

  initCreationFlow() {
    this.selectedTodo = this.blankTodo;
    this.creating = true;
  }

  updateTodo(todoDto: TodoDto) {
    this.todoService.updateTodo(todoDto)
      .subscribe(data => {
        this.selectedTodo = undefined;
        this.getTodos();
      })
  }
  createTodo(todoDto: TodoDto) {
    this.todoService.createTodo(todoDto)
      .subscribe(_ => {
        this.selectedTodo = undefined;
        this.getTodos();
      })
  }
  deleteTodo(todo_id: String) {
    this.todoService.deleteTodo(todo_id)
      .subscribe(_ => {
        this.selectedTodo = undefined;
        this.getTodos();
      })
  }
}
