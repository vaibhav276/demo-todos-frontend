import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { DateUtilService } from '../date-util.service';

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

  dateUtilService: DateUtilService = inject(DateUtilService);

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

    let today = this.dateUtilService.getFutureDate(0);
    let tomorrow = this.dateUtilService.getFutureDate(1);
    let dayAfter = this.dateUtilService.getFutureDate(2);

    this.overdueTodos = [];
    this.todaysTodos = [];
    this.tomorrowsTodos = [];
    this.laterTodos = [];
    for(let item of this.todos) {
      if (item.due_date < today) {
        if (!item.done) {
          this.overdueTodos.push(item);
        }
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
