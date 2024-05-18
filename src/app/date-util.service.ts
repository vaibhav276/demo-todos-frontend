import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getFutureDate(offset: number): Date {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (offset <= 0) return today;

    let future = new Date();
    future.setHours(0, 0, 0, 0);
    future.setDate(today.getDate() + offset);

    return future;
  }
}
