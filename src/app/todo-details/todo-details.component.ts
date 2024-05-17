import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {
  @Input() todo!: Todo;
  @Input() creating: boolean = false;
  @Output() creationEvent = new EventEmitter<Todo>();
  @Output() updationEvent = new EventEmitter<Todo>();

  createTodo() {
    this.creationEvent.emit(this.todo);
  }

  updateTodo() {
    this.updationEvent.emit(this.todo);
  }
}
