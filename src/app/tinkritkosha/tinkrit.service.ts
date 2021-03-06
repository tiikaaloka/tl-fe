import { PrivacyComponent } from './../privacy/privacy.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { response } from 'express';

@Injectable()
export class TinkritService {
  public url = 'http://tiikaaloka.org:8081/';

  constructor(private httpClient: HttpClient) { }

  public getData(): any {
    // const url = 'https://tl-be-dot-tiikaaloka.el.r.appspot.com/ramayana';
    return this.httpClient.get(
      this.url + 'dhAtu'
    );
  }

  public fetchData(dhAtu): any {
    // const url = 'https://tl-be-dot-tiikaaloka.el.r.appspot.com/ramayana';
    return this.httpClient.get(
      this.url + 'dhAtu?edit=' + dhAtu
    );
  }

  public savedhAtu(payload): any {
    console.log(payload);
    return this.httpClient.post(
      this.url,
      payload
    );
  }

  public save(payload): any {
    console.log(payload);
    const url = 'https://tl-be-dot-tiikaaloka.el.r.appspot.com/shloka';
    return this.httpClient.post(
      url,
      payload
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
