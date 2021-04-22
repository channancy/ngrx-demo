import { createReducer, on } from '@ngrx/store';
import { LoadData } from './deaths.actions';

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

export const deathsReducer = createReducer<DeathsState>(
  initialState,
  on(LoadData, (state, { data }) => ({
    ...state,
    state: data.jurisdiction_of_occurrence,
    weekEndingDate: data.week_ending_date,
    allCause: +data.all_cause,
    naturalCause: +data.natural_cause,
    diabetes: +data.diabetes_mellitus_e10_e14,
    influenzaAndPneumonia: +data.influenza_and_pneumonia_j09_j18,
    heartDisease: +data.diseases_of_heart_i00_i09,
  }))
);
