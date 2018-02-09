import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Endpoint } from './Constants';
import { Eco } from './eco';

@Injectable()
export class EcoService {
  constructor(private http: HttpClient) { }

  downloadEcos(): Observable<Eco[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'SM_USER': 'vbalimi'
    });

    return this.http.get<Eco[]>(Endpoint.eco, { headers });
  }
}