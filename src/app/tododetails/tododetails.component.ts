import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tododetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tododetails.component.html',
  styleUrl: './tododetails.component.css'
})
export class TododetailsComponent {
  @Input() todo!: Todo;
}
