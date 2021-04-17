import { Stats } from '../stats';
import { createReducer } from '@ngrx/store';

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

export const covidReducer = createReducer<CovidState>(initialState);
