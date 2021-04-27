import { createReducer, on } from '@ngrx/store';
import { LoadData, LoadDataFailure } from './covid.actions';
import { CovidData } from 'src/app/services/covidData';
import { SelectState } from 'src/app/search/state/search.actions';

export interface CovidState {
  stats: CovidData;
  loading: boolean;
}

const initialState: CovidState = {
  stats: null,
  loading: false,
};

export const covidReducer = createReducer<CovidState>(
  initialState,
  on(SelectState, (state) => ({
    ...state,
    loading: true,
  })),
  on(LoadData, (state, { data }) => ({
    ...state,
    stats: data,
    loading: false,
  })),
  on(LoadDataFailure, (state) => ({
    ...state,
    stats: null,
    loading: false,
  }))
);
