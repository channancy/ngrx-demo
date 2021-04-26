import { createReducer, on } from '@ngrx/store';
import { DeathsData } from 'src/app/services/deathsData';
import { LoadData } from './deaths.actions';

export interface DeathsState {
  stats: DeathsData[];
  weekEndingDate: string;
}

const initialState: DeathsState = {
  stats: null,
  weekEndingDate: null,
};

export const deathsReducer = createReducer<DeathsState>(
  initialState,
  on(LoadData, (state, { data }) => ({
    ...state,
    stats: data,
  }))
);
