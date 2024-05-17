import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnChanges {
  @Input() todos!: Todo[];
  @Input() selectedTodo!: Todo;
  @Output() selectionEvent = new EventEmitter<Todo>();

  overdueTodos: Todo[] = [];
  todaysTodos: Todo[] = [];
  tomorrowsTodos: Todo[] = [];
  laterTodos: Todo[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.todos = changes['todos'].currentValue;
    this.bucketifyTodos();
  }

  selectTodo(todo: Todo) {
    this.selectedTodo = todo;
    this.selectionEvent.emit(this.selectedTodo);
  }

  bucketifyTodos() {
    if (!this.todos || this.todos.length <= 0) {
      return;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(today.getDate() + 1);

    let dayAfter = new Date();
    dayAfter.setHours(0, 0, 0, 0);
    dayAfter.setDate(tomorrow.getDate() + 1);

    for(let item of this.todos) {
      if (item.due_date < today) {
        this.overdueTodos.push(item);
        continue;
      } else if (item.due_date < tomorrow) {
        this.todaysTodos.push(item);
        continue;
      } else if (item.due_date < dayAfter) {
        this.tomorrowsTodos.push(item);
        continue;
      } else {
        this.laterTodos.push(item);
      }
    }
  }

}
