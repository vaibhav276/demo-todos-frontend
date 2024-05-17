import { Component, inject, OnInit } from '@angular/core';
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
  todos: Todo[] = [];
  selectedTodo!: Todo;

  blankTodo: Todo = {
    todo_id: '',
    title: 'Something new',
    description: 'Description of the awesomeness...',
    due_date: new Date(),
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
    // this.todoService.getTodos()
    //   .subscribe(data => {
    //     this.todos = data.todos
    //   });

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

  updateTodo(todo: Todo) {
    todo.due_date = new Date(todo.due_date); // Because its a string from the input
    this.todoService.updateTodo(todo)
      .subscribe(data => {
        this.selectedTodo = data;
      })
  }
  createTodo(todo: Todo) {
    this.todoService.createTodo(todo)
      .subscribe(data => {
        this.todos.push(data);
      })
  }
}
