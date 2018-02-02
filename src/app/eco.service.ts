import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Eco } from './Eco';

@Injectable()
export class EcoService {
  private ecoUrl = 'http://53.88.75.34:9081/nc0/api/safira/eco/find?filter-tasks=present'
  // private ecoUrl = 'https://tsoa-dev.es.corpintra.net/TestServices/safira/eco/find?filter-tasks=present'

  constructor(private http: HttpClient) { }

  downloadEcos(): Observable<Eco[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'SM_USER': 'vbalimi'
    });

    return this.http.get<Eco[]>(this.ecoUrl, { headers });
  }
}