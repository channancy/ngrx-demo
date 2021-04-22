import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DeathsData } from './deathsData';

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

  getDeathsDataByState(state: string): Observable<DeathsData> {
    return this.http.get<DeathsData>(
      `${this.cdcUrl}/muzy-jte6.json?jurisdiction_of_occurrence=${state}`,
      this.httpOptions
    );
  }
}
