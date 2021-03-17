
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export default class HttpService {
  baseApiPath = `http://${environment.apiHost}`;

  constructor(
    private http: HttpClient,
  ) { }

  get(path, payload = {}, httpOpts = {}, baseurl = null) {
    // prettier-ignore
    const qs = this.queryString(payload);
    let url = !baseurl ? this.baseApiPath + path : baseurl + path;
    if (qs.length) {
      url += '?' + qs;
    }
    return (
      this.http
        .get<any>(url, {
          headers: httpOpts
        })
        .pipe(
          catchError(this.handlingError.bind(this)),
          map(response => response)
        )
    );
  }

  post(path, payload, httpOpts = {}) {
    console.log(`Calling POST ${path}`, payload, {
      headers: httpOpts
    });
    // prettier-ignore
    return (
      this.http
        .post<any>(this.baseApiPath + path, payload, {
          headers: httpOpts
        })
        .pipe(
          catchError(this.handlingError.bind(this)),
          map(response => response)
        )
    );
  }

  put(path, payload, httpOpts = {}) {

    console.log(`Calling PUT ${path}`, payload);
    // prettier-ignore
    return (
      this.http
        .put<any>(this.baseApiPath + path, payload, httpOpts)
        .pipe(
          catchError(this.handlingError.bind(this)),
          map(response => response)
        )
    );
  }

  delete(path) {
    return (
      this.http
        .delete<any>(this.baseApiPath + path)
        .pipe(
          catchError(this.handlingError.bind(this)),
          map(response => response)
        )
    );
  }
  queryString(payload) {
    const queries = [];
    for (const key of Object.keys(payload)) {
      if (payload[key] !== null) {
        queries.push(key + '=' + payload[key]);
      }
    }
    return queries.join('&');
  }

  handlingError = error => {
    return throwError(error);
  }
}

export { HttpService };
