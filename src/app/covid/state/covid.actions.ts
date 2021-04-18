import { createAction, props } from '@ngrx/store';
import { CovidData } from 'src/app/services/covid';

export const LoadData = createAction(
  '[Covid] Load Data',
  props<{ data: CovidData }>()
);

export const LoadDataFailure = createAction(
  '[Covid] Load Data Failure',
  props<{ error: string }>()
);
