import { createReducer, on } from '@ngrx/store';
import { LoadData } from './covid.actions';
import { CovidData } from 'src/app/services/covidData';

export interface CovidState {
  stats: CovidData;
}

const initialState: CovidState = {
  stats: null,
};

export const covidReducer = createReducer<CovidState>(
  initialState,
  on(LoadData, (state, { data }) => ({
    ...state,
    stats: data,
  }))
);
