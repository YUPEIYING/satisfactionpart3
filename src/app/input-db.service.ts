import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InputDbService implements InMemoryDbService {
  createDb() {
    const counterstaff = [
      { no: null, id: null, name: ''},
      { no: 1, id: 'A1', name: '陳OO' },
      { no: 2, id: 'B2', name: '林OO' },
      { no: 3, id: 'C3', name: '沈OO' },
      { no: 4, id: 'D4', name: '張OO' },
      { no: 5, id: 'E5', name: '呂OO' },
      { no: 6, id: 'F6', name: '吳OO' },
      { no: 7, id: 'G7', name: '廖OO' },
      { no: 8, id: 'H8', name: '黃OO' },
      { no: 9, id: 'I9', name: '謝OO' },
      { no: 10, id: 'K10', name: '周OO' }
    ];
    return {counterstaff};
  }

  constructor() { }
}
