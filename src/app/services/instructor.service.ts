import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Instructor } from '../models/instructor';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InstructorService {

  private instructorsUrl = 'api/instructors';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET instructors from the server */
  getInstructors (): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.instructorsUrl)
      .pipe(
        tap(instructors => this.log(`fetched instructors`)),
        catchError(this.handleError('getInstructors', []))
      );
  }

  /** GET instructor by id. Return `undefined` when id not found */
  getInstructorNo404<Data>(id: number): Observable<Instructor> {
    const url = `${this.instructorsUrl}/?id=${id}`;
    return this.http.get<Instructor[]>(url)
      .pipe(
        map(instructors => instructors[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} instructor id=${id}`);
        }),
        catchError(this.handleError<Instructor>(`getInstructor id=${id}`))
      );
  }

  /** GET instructor by id. Will 404 if id not found */
  getInstructor(id: number): Observable<Instructor> {
    console.log("getInstructor called");
    const url = `${this.instructorsUrl}/${id}`;
    return this.http.get<Instructor>(url).pipe(
      tap(_ => this.log(`fetched instructor id=${id}`)),
      catchError(this.handleError<Instructor>(`getInstructor id=${id}`))
    );
  }

  /* GET instructors whose name contains search term */
  searchInstructors(term: string): Observable<Instructor[]> {
    if (!term.trim()) {
      // if not search term, return empty instructor array.
      return of([]);
    }
    return this.http.get<Instructor[]>(`${this.instructorsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found instructors matching "${term}"`)),
      catchError(this.handleError<Instructor[]>('searchInstructors', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new instructor to the server */
  addInstructor (instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.instructorsUrl, instructor, httpOptions).pipe(
      tap((instructor: Instructor) => this.log(`added instructor w/ id=${instructor.id}`)),
      catchError(this.handleError<Instructor>('addInstructor'))
    );
  }

  /** DELETE: delete the instructor from the server */
  deleteInstructor (instructor: Instructor | number): Observable<Instructor> {
    const id = typeof instructor === 'number' ? instructor : instructor.id;
    const url = `${this.instructorsUrl}/${id}`;

    return this.http.delete<Instructor>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted instructor id=${id}`)),
      catchError(this.handleError<Instructor>('deleteInstructor'))
    );
  }

  /** PUT: update the instructor on the server */
  updateInstructor (instructor: Instructor): Observable<any> {
    return this.http.put(this.instructorsUrl, instructor, httpOptions).pipe(
      tap(_ => this.log(`updated instructor id=${instructor.id}`)),
      catchError(this.handleError<any>('updateInstructor'))
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

  /** Log a InstructorService message with the MessageService */
  private log(message: string) {
    console.log(message);
    this.messageService.add('InstructorService: ' + message);
  }
}
