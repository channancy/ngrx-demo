import { createAction, props } from '@ngrx/store';
import { LocationState } from '../locationState';

export const SelectState = createAction(
  '[Search] Select State',
  props<{ state: LocationState }>()
);
