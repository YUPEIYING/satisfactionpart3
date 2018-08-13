import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MainComponent } from './main/main.component';
import { Http } from '@angular/http';
import { ExtentComponent } from './extent/extent.component';
// import { Extent } from './Extent';

@Injectable({
  providedIn: 'root'
})
export class ExtentService {

  Showword: string;
  DN: number;
  // private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     console.error(error);
  //     return of(result as T);
  //   };
  // }

  // getHeroNo404<Data>(id: number): Observable<Extent> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<Extent[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //       }),
  //       catchError(this.handleError<Extent>(`getHero id=${id}`))
  //     );
  // }

    public addsatisfydegree (empno: string , degree: number): Observable<MainComponent> {
      const satisfactionUrl = 'http://127.0.0.1:3000/rankAdd';
      const degreeString = degree + ''; // number變成string
      // const body = JSON.stringify({
      //   'empNo': '709152',
      //   'degree': degreeString
      // });

      this.DN = degree;
      this.ShowwordF();

      return this.http.post<MainComponent>(satisfactionUrl, {
        'empNo': '709152',
        'degree': degreeString
      })
        .pipe(
          catchError(undefined)
        );
    }

    public ShowwordF() {
      switch (this.DN) {
        case (1):
          this.Showword = '非常不滿意';
          console.log(this.DN);
        break;

        case (2):
          this.Showword = '不滿意';
        break;

        case (3):
          this.Showword = '普通';
        break;

        case (4):
          this.Showword = '滿意';
        break;

        case (5):
          this.Showword = '非常滿意';
        break;

        default:
          this.Showword = 'null';
        break;
      }
    }
}
