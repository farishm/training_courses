import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hall } from '../models/hall';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HallService {

  private hallsUrl = 'api/halls';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET halls from the server */
  getHalls (): Observable<Hall[]> {
    return this.http.get<Hall[]>(this.hallsUrl)
      .pipe(
        tap(halls => this.log(`fetched halls`)),
        catchError(this.handleError('getHalls', []))
      );
  }

  /** GET hall by id. Return `undefined` when id not found */
  getHallNo404<Data>(id: number): Observable<Hall> {
    const url = `${this.hallsUrl}/?id=${id}`;
    return this.http.get<Hall[]>(url)
      .pipe(
        map(halls => halls[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hall id=${id}`);
        }),
        catchError(this.handleError<Hall>(`getHall id=${id}`))
      );
  }

  /** GET hall by id. Will 404 if id not found */
  getHall(id: number): Observable<Hall> {
    const url = `${this.hallsUrl}/${id}`;
    return this.http.get<Hall>(url).pipe(
      tap(_ => this.log(`fetched hall id=${id}`)),
      catchError(this.handleError<Hall>(`getHall id=${id}`))
    );
  }

  /* GET halls whose name contains search term */
  searchHalls(term: string): Observable<Hall[]> {
    if (!term.trim()) {
      // if not search term, return empty hall array.
      return of([]);
    }
    return this.http.get<Hall[]>(`${this.hallsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found halls matching "${term}"`)),
      catchError(this.handleError<Hall[]>('searchHalls', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hall to the server */
  addHall (hall: Hall): Observable<Hall> {
    //console.log(hall.id);
    return this.http.post<Hall>(this.hallsUrl, hall, httpOptions).pipe(
      tap((hall: Hall) => this.log(`added hall w/ id=${hall.id}`)),
      catchError(this.handleError<Hall>('addHall'))
    );
  }

  /** DELETE: delete the hall from the server */
  deleteHall (hall: Hall | number): Observable<Hall> {
    const id = typeof hall === 'number' ? hall : hall.id;
    const url = `${this.hallsUrl}/${id}`;

    return this.http.delete<Hall>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hall id=${id}`)),
      catchError(this.handleError<Hall>('deleteHall'))
    );
  }

  /** PUT: update the hall on the server */
  updateHall (hall: Hall): Observable<any> {
    return this.http.put(this.hallsUrl, hall, httpOptions).pipe(
      tap(_ => this.log(`updated hall id=${hall.id}`)),
      catchError(this.handleError<any>('updateHall'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HallService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HallService: ' + message);
  }
}
