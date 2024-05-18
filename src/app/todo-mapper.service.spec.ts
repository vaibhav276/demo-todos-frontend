import { TestBed } from '@angular/core/testing';

import { TodoMapperService } from './todo-mapper.service';

describe('TodoMapperService', () => {
  let service: TodoMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
