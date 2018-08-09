import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Input } from './input';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private counterstaffUrl = 'api/counterstaff';  // URL to web api
  empno: any;

  constructor(private http: HttpClient) { }

  getCounterstaff(no: number, id: string): Observable<Input> {
    const urlid = `${this.counterstaffUrl}/${id}`;
    const urlno = `${this.counterstaffUrl}/${no}`;
    const Name = `${this.counterstaffUrl}/${name}`;
    // id = id - 1;
    this.empno = no;
    console.log(urlno, urlid, Name);
    console.log(this.empno);
    return this.http.get<Input[]>(Name)
    .pipe(
      map(counterstaff => counterstaff[id]), // returns a {0|1} element array
      catchError(this.handleError<Input>(`getCounterstaff id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
