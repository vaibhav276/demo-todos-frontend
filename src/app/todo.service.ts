import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  overdue: Todo[] = [
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Quit the day job',
      description: 'Quitting will give me peace of mind to think',
      due_date: new Date('2024-01-30'),
      done: false
    },
  ];

  today: Todo[] = [
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build angular project',
      description: '',
      due_date: new Date('2024-05-17'),
      done: false
    },
  ];

  later: Todo[] = [
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Decide on career style',
      description: 'The career style includes freelancing, employment and enterpreneurship',
      due_date: new Date('2024-06-30'),
      done: false
    },
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Decide on area',
      description: 'The area could be backend, frontend, system design, visualization etc.',
      due_date: new Date('2024-05-31'),
      done: false
    },
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build dataviz project',
      description: '',
      due_date: new Date('2024-07-31'),
      done: false
    },
  ]

  tomorrow: Todo[] = [
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build serverless project',
      description: '',
      due_date: new Date('2024-05-18'),
      done: false
    },
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build golang project',
      description: '',
      due_date: new Date('2024-05-18'),
      done: false
    },
    {
      id: '01HY053FQRAMBR3STSPPHAMCA0',
      title: 'Build spring boot project',
      description: '',
      due_date: new Date('2024-05-17'),
      done: false
    },
  ];

  getOverdue(): Todo[] {
    return this.overdue;
  }

  getToday(): Todo[] {
    return this.today;
  }

  getTomorrow(): Todo[] {
    return this.tomorrow;
  }

  getLater(): Todo[] {
    return this.later;
  }
}
