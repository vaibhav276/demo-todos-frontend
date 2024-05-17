import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css'
})
export class TodoitemComponent {
  @Input() todo!: Todo;
  @Output() selectEvent = new EventEmitter<Todo>();

  selectTodo() {
    this.selectEvent.emit(this.todo);
  }
}
