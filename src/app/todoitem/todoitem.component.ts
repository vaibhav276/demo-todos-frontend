import { Component, Input } from '@angular/core';
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
}
