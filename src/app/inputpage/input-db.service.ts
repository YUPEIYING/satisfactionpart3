import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InputDbService implements InMemoryDbService {
  createDb() {
    const counterstaff = [
      { no: null, id: null, name: ''},
      { no: 'A1', id: 1, name: '陳OO' },
      { no: 'B2', id: 2, name: '林OO' },
      { no: 'C3', id: 3, name: '沈OO' },
      { no: 'D4', id: 4, name: '張OO' },
      { no: 'E5', id: 5, name: '呂OO' },
      { no: 'F6',  id: 6, name: '吳OO' },
      { no: 'G7', id: 7, name: '廖OO' },
      { no: 'H8', id: 8, name: '黃OO' },
      { no: 'I9', id: 9, name: '謝OO' },
      { no: 'J10', id: 10, name: '周OO' }
    ];
    return {counterstaff};
  }

  constructor() { }
}
