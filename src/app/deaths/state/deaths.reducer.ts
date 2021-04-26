import { createReducer, on } from '@ngrx/store';
import { SelectState } from 'src/app/search/state/search.actions';
import { DeathsData } from 'src/app/services/deathsData';
import { LoadData, SelectWeek } from './deaths.actions';

export interface DeathsState {
  stats: DeathsData[];
  weekEndingDate: string;
  loading: boolean;
}

const initialState: DeathsState = {
  stats: null,
  weekEndingDate: null,
  loading: false,
};

export const deathsReducer = createReducer<DeathsState>(
  initialState,
  on(SelectState, (state) => ({
    ...state,
    loading: true,
  })),
  on(LoadData, (state, { data }) => ({
    ...state,
    stats: data,
    weekEndingDate: state.weekEndingDate
      ? state.weekEndingDate
      : data[0].week_ending_date,
  })),
  on(SelectWeek, (state, { week }) => ({
    ...state,
    weekEndingDate: week,
  }))
);
