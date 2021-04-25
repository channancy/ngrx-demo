import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

export const select = (state: AppState) => state;
export const Search = createSelector(select, (state: AppState) => state.search);
