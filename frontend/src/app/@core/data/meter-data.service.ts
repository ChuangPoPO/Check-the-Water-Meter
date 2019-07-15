import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MeterDataService {

  constructor(
    // injector: Injector,
    private http: HttpClient,
  ) {
  }

  getDate(): Observable<any>  {
    return this.http.get('../../../assets/data/fake-data.json');
  }


}
