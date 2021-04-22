import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidData } from './covidData';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  private covidUrl = 'https://api.covidactnow.org/v2';

  constructor(private http: HttpClient) {}

  getCovidDataByState(state: string): Observable<CovidData> {
    return this.http.get<CovidData>(
      `${this.covidUrl}/state/${state}.json?apiKey=${environment.covidApiKey}`
    );
  }
}
