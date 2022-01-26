const template = `
<ng-container *ngIf="data$ | async as data; else loadingTmp">
  <ng-container *ngTemplateOutlet="getTemplate(data); context: {data: data}">
  </ng-container>
</ng-container>

<ng-template #loadingTmp>
  <div>...Loading</div>
</ng-template>

<ng-template #viewTmp let-data="data">
  <pre>
    {{data | json}}
  </pre>
</ng-template>

<ng-template #emptyTmp>
  <div>EMPTY</div>
</ng-template>

<ng-template #errorTmp let-error="data">
  <div>ERROR: {{error.message}}</div>
</ng-template>
`
const component = `
import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FetchService} from './services/fetch.service';
import { catchError, of, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data$ = this.fetch.getPhotos().pipe(
    startWith(null),
    catchError((err: Error) => of(new Error(err.message))),
  );

  @ViewChild('viewTmp', {static: true}) view: TemplateRef<any>;
  @ViewChild('loadingTmp', {static: false}) loading: TemplateRef<any>;
  @ViewChild('emptyTmp', {static: true}) empty: TemplateRef<any>;
  @ViewChild('errorTmp', {static: true}) error: TemplateRef<any>;

  constructor(private fetch: FetchService) {
  }

  getTemplate(data: any[] | Error): TemplateRef<any> {
    if (data instanceof Error) {
      return this.error;
    }
    if (data.length) {
      return this.view
    } else {
      return this.empty
    }
  }
}
`;

const service = `
import { Injectable } from '@angular/core';
import {delay, map, Observable, of, switchMap, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export const FETCH_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any> {
    return of(null).pipe(
      delay(3000),
      switchMap(this.makeErrorOrData.bind(this)),
    );
  }
  private makeErrorOrData(): Observable<any> {
    const isError = !!Math.round(Math.random() * 10 % 3)
    if (!isError) {
      return throwError(new Error(\`I'm so sorry :'(\`))
    }
    return this.http.get(\`\${FETCH_URL}/albums/1/photos\`).pipe(map(makeDataOrEmpty));
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
`;

export const CODE = {
  template,
  component,
  service
}
