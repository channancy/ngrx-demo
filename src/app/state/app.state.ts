import { ActionReducerMap } from '@ngrx/store';
import { covidReducer, CovidState } from '../covid/state/covid.reducer';
import { deathsReducer, DeathsState } from '../deaths//state/death.reducer';
import { searchReducer, SearchState } from '../search/state/search.reducer';

export interface AppState {
  covid: CovidState;
  deaths: DeathsState;
  search: SearchState;
}

export const reducers: ActionReducerMap<AppState> = {
  covid: covidReducer,
  deaths: deathsReducer,
  search: searchReducer,
};
