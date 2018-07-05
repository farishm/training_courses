import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { College } from '../models/college';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CollegeService {

  private collegesUrl = 'api/colleges';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET colleges from the server */
  getColleges (): Observable<College[]> {
    return this.http.get<College[]>(this.collegesUrl)
      .pipe(
        tap(colleges => this.log(`fetched colleges`)),
        catchError(this.handleError('getColleges', []))
      );
  }

  /** GET college by id. Return `undefined` when id not found */
  getCollegeNo404<Data>(id: number): Observable<College> {
    const url = `${this.collegesUrl}/?id=${id}`;
    return this.http.get<College[]>(url)
      .pipe(
        map(colleges => colleges[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} college id=${id}`);
        }),
        catchError(this.handleError<College>(`getCollege id=${id}`))
      );
  }

  /** GET college by id. Will 404 if id not found */
  getCollege(id: number): Observable<College> {
    console.log("getCollege called");
    const url = `${this.collegesUrl}/${id}`;
    return this.http.get<College>(url).pipe(
      tap(_ => this.log(`fetched college id=${id}`)),
      catchError(this.handleError<College>(`getCollege id=${id}`))
    );
  }

  /* GET colleges whose name contains search term */
  searchColleges(term: string): Observable<College[]> {
    if (!term.trim()) {
      // if not search term, return empty college array.
      return of([]);
    }
    return this.http.get<College[]>(`${this.collegesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found colleges matching "${term}"`)),
      catchError(this.handleError<College[]>('searchColleges', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new college to the server */
  addCollege (college: College): Observable<College> {
    return this.http.post<College>(this.collegesUrl, college, httpOptions).pipe(
      tap((college: College) => this.log(`added college w/ id=${college.id}`)),
      catchError(this.handleError<College>('addCollege'))
    );
  }

  /** DELETE: delete the college from the server */
  deleteCollege (college: College | number): Observable<College> {
    const id = typeof college === 'number' ? college : college.id;
    const url = `${this.collegesUrl}/${id}`;

    return this.http.delete<College>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted college id=${id}`)),
      catchError(this.handleError<College>('deleteCollege'))
    );
  }

  /** PUT: update the college on the server */
  updateCollege (college: College): Observable<any> {
    return this.http.put(this.collegesUrl, college, httpOptions).pipe(
      tap(_ => this.log(`updated college id=${college.id}`)),
      catchError(this.handleError<any>('updateCollege'))
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

  /** Log a CollegeService message with the MessageService */
  private log(message: string) {
    console.log(message);
    this.messageService.add('CollegeService: ' + message);
  }
}
