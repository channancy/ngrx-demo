import { createReducer } from '@ngrx/store';
import { LocationState } from '../locationState';

export interface SearchState {
  state: LocationState;
}

const initialState: SearchState = {
  state: null,
};

export const searchReducer = createReducer<SearchState>(initialState);
