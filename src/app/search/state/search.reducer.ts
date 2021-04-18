import { createReducer, on } from '@ngrx/store';
import { LocationState } from '../locationState';
import { SelectState } from './search.actions';

export interface SearchState {
  state: LocationState;
}

const initialState: SearchState = {
  state: null,
};

export const searchReducer = createReducer<SearchState>(
  initialState,
  on(
    SelectState,
    (state, action): SearchState => {
      return {
        ...state,
        state: action.state,
      };
    }
  )
);
