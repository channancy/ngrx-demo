import { createReducer, on } from '@ngrx/store';
import { DeathsData } from 'src/app/services/deathsData';
import { LoadData } from './deaths.actions';

export interface DeathsState {
  stats: DeathsData[];
}

const initialState: DeathsState = {
  stats: null,
};

export const deathsReducer = createReducer<DeathsState>(
  initialState,
  on(LoadData, (state, { data }) => ({
    ...state,
    stats: data,
  }))
);
