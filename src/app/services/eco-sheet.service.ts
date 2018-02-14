import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CoverPage } from '../models/cover-page';
import { Endpoint } from '../constants';


@Injectable()
export class EcoSheetService {

  constructor(
    private http: HttpClient
  ) { }

  downloadCoverPage(ecoNumber: string): Observable<CoverPage> {
    return this.http.get<CoverPage>(Endpoint.coverPage + ecoNumber, Endpoint.headers);
  }
}
