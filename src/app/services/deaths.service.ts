import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidData } from './covid';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeathsService {
  private cdcUrl = 'https://data.cdc.gov/resource';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-App-Token': environment.cdcAppToken,
    }),
  };

  constructor(private http: HttpClient) {}

  getDeathsDataByState(state: string): Observable<CovidData> {
    return this.http.get<CovidData>(
      `${this.cdcUrl}/muzy-jte6.json?jurisdiction_of_occurrence=${state}`,
      this.httpOptions
    );
  }
}
