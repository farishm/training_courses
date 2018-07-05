import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Seminar } from '../models/seminar';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SeminarService {

  private seminarsUrl = 'api/seminars';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET seminars from the server */
  getSeminars (): Observable<Seminar[]> {
    return this.http.get<Seminar[]>(this.seminarsUrl)
      .pipe(
        tap(seminars => this.log(`fetched seminars`)),
        catchError(this.handleError('getSeminars', []))
      );
  }

  /** GET seminar by id. Return `undefined` when id not found */
  getSeminarNo404<Data>(id: number): Observable<Seminar> {
    const url = `${this.seminarsUrl}/?id=${id}`;
    return this.http.get<Seminar[]>(url)
      .pipe(
        map(seminars => seminars[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} seminar id=${id}`);
        }),
        catchError(this.handleError<Seminar>(`getSeminar id=${id}`))
      );
  }

  /** GET seminar by id. Will 404 if id not found */
  getSeminar(id: number): Observable<Seminar> {
    const url = `${this.seminarsUrl}/${id}`;
    return this.http.get<Seminar>(url).pipe(
      tap(_ => this.log(`fetched seminar id=${id}`)),
      catchError(this.handleError<Seminar>(`getSeminar id=${id}`))
    );
  }

  /* GET seminars whose name contains search term */
  searchSeminars(term: string): Observable<Seminar[]> {
    if (!term.trim()) {
      // if not search term, return empty seminar array.
      return of([]);
    }
    return this.http.get<Seminar[]>(`${this.seminarsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found seminars matching "${term}"`)),
      catchError(this.handleError<Seminar[]>('searchSeminars', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new seminar to the server */
  addSeminar (seminar: Seminar): Observable<Seminar> {
    //console.log(seminar.id);
    return this.http.post<Seminar>(this.seminarsUrl, seminar, httpOptions).pipe(
      tap((seminar: Seminar) => this.log(`added seminar w/ id=${seminar.id}`)),
      catchError(this.handleError<Seminar>('addSeminar'))
    );
  }

  /** DELETE: delete the seminar from the server */
  deleteSeminar (seminar: Seminar | number): Observable<Seminar> {
    const id = typeof seminar === 'number' ? seminar : seminar.id;
    const url = `${this.seminarsUrl}/${id}`;

    return this.http.delete<Seminar>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted seminar id=${id}`)),
      catchError(this.handleError<Seminar>('deleteSeminar'))
    );
  }

  /** PUT: update the seminar on the server */
  updateSeminar (seminar: Seminar): Observable<any> {
    return this.http.put(this.seminarsUrl, seminar, httpOptions).pipe(
      tap(_ => this.log(`updated seminar id=${seminar.id}`)),
      catchError(this.handleError<any>('updateSeminar'))
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

  /** Log a SeminarService message with the MessageService */
  private log(message: string) {
    this.messageService.add('SeminarService: ' + message);
  }
}
