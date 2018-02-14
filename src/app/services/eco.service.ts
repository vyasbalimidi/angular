import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Endpoint } from '../constants';
import { Eco } from '../models/eco';

@Injectable()
export class EcoService {
  constructor(
    private http: HttpClient
  ) { }

  downloadEcos(): Observable<Eco[]> {
    return this.http.get<Eco[]>(Endpoint.eco, Endpoint.headers);
  }
}