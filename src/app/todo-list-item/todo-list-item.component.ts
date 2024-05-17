import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input() todo!: Todo;
  @Output() selectEvent = new EventEmitter<Todo>();

  selectTodo() {
    this.selectEvent.emit(this.todo);
  }
}
