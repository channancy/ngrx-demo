import { createReducer } from '@ngrx/store';

export interface DeathsState {
  state: string;
  weekEndingDate: string;
  allCause: number;
  naturalCause: number;
  diabetes: number;
  influenzaAndPneumonia: number;
  heartDisease: number;
}

const initialState: DeathsState = {
  state: '',
  weekEndingDate: '',
  allCause: 0,
  naturalCause: 0,
  diabetes: 0,
  influenzaAndPneumonia: 0,
  heartDisease: 0,
};

export const deathsReducer = createReducer<DeathsState>(initialState);
