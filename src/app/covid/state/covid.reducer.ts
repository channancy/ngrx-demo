import { Stats } from '../stats';
import { createReducer, on } from '@ngrx/store';
import { LoadData } from './covid.actions';

export interface CovidState {
  state: string;
  population: number;
  stats: Stats;
}

const initialState: CovidState = {
  state: '',
  population: 0,
  stats: null,
};

export const covidReducer = createReducer<CovidState>(
  initialState,
  on(LoadData, (state, { data }) => ({
    ...state,
    state: data.state,
    population: data.population,
    stats: {
      cases: data.actuals.cases,
      deaths: data.actuals.deaths,
      vaccinesDistributed: data.actuals.vaccinesDistributed,
      vaccinesAdministered: data.actuals.vaccinesAdministered,
    },
  }))
);
