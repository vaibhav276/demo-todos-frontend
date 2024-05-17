import { Injectable } from '@angular/core';
import { Todo, TodoList } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todos: Todo[] = [
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Quit the day job',
      description: 'Quitting will give me peace of mind to think',
      due_date: new Date('2024-01-30'),
      done: false
    },
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build angular project',
      description: '',
      due_date: new Date('2024-05-17'),
      done: false
    },
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build serverless project',
      description: '',
      due_date: new Date('2024-05-18'),
      done: false
    },
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build golang project',
      description: '',
      due_date: new Date('2024-05-18'),
      done: false
    },
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build spring boot project',
      description: '',
      due_date: new Date('2024-05-17'),
      done: false
    },
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Decide on career style',
      description: 'The career style includes freelancing, employment and enterpreneurship',
      due_date: new Date('2024-06-30'),
      done: false
    },
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Decide on area',
      description: 'The area could be backend, frontend, system design, visualization etc.',
      due_date: new Date('2024-05-31'),
      done: false
    },
    {
      todo_id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build dataviz project',
      description: '',
      due_date: new Date('2024-07-31'),
      done: false
    },
  ];

  serverUrl: String = 'http://localhost:8080/api/v1';

  getTodos(): Observable<TodoList> {
    // todo: Remove hardcode
    const options = {
      headers: {
        'user_id': 'U1234'
      }
    };

    return this.http.get<TodoList>(
      this.serverUrl + '/todos',
      options
    );
  }

  updateTodo(todo: Todo): Observable<Todo> {
    // todo: Remove hardcode
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'user_id': 'U1234'
      }
    };

    return this.http.patch<Todo>(
      this.serverUrl + '/todo/t/' + todo.todo_id,
      JSON.stringify(todo),
      options
    );

  }

  createTodo(todo: Todo): Observable<Todo> {
    // todo: Remove hardcode
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'user_id': 'U1234'
      }
    }

    return this.http.post<Todo>(
      this.serverUrl + '/todos',
      JSON.stringify(todo),
      options
    );

  }
}
