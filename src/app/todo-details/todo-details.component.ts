import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { Todo } from '../todo';
import { TodoDto } from '../todo-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoMapperService } from '../todo-mapper.service';

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
  @Output() creationEvent = new EventEmitter<TodoDto>();
  @Output() updationEvent = new EventEmitter<TodoDto>();
  @Output() deletionEvent = new EventEmitter<String>();

  todoMapperService: TodoMapperService = inject(TodoMapperService);
  todoDto: TodoDto = { }

  ngOnChanges(changes: SimpleChanges): void {
    this.todo = changes['todo'].currentValue;
    this.todoDto = this.todoMapperService.mapToDto(this.todo, this.todoDto);
  }

  createTodo() {
    this.todoDto.todo_id = undefined;
    this.creationEvent.emit(this.todoDto);
  }

  updateTodo() {
    this.todo = this.todoMapperService.mapToModel(this.todoDto, this.todo);
    this.updationEvent.emit(this.todoDto);
  }

  deleteTodo() {
    this.deletionEvent.emit(this.todoDto.todo_id);
  }
}
