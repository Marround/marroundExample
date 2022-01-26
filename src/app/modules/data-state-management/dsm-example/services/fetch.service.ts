import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, delay, map, Observable, of, switchMap, tap, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export const FETCH_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private _photos$ = new BehaviorSubject<any>(null);
  photos$ = this._photos$.asObservable();

  constructor(private http: HttpClient) { }

  setDefault(): void {
    this._photos$.next(null);
  }

  getPhotos(): void {
    of(null).pipe(
      delay(3000),
      switchMap(this.makeErrorOrData.bind(this)),
      catchError((err: Error) => of(new Error(err.message))),
      tap(data => this._photos$.next(data))
    ).subscribe();
  }
  private makeErrorOrData(): Observable<any> {
    const isError = !!Math.round(Math.random() * 10 % 3)
    if (!isError) {
      return throwError(new Error(`I'm so sorry :'(`))
    }
    return this.http.get(`${FETCH_URL}/albums/1/photos`).pipe(map(makeDataOrEmpty));
  }
}

function makeDataOrEmpty(data: any): any {
  const isData = !!Math.round(Math.random() * 10 % 2)
  if (isData) {
    return data;
  } else {
    return []
  }
}
