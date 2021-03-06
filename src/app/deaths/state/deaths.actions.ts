import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { DeathsData } from 'src/app/services/deathsData';

export const LoadData = createAction(
  '[Deaths] Load Data',
  props<{ data: DeathsData[] }>()
);

export const LoadDataFailure = createAction(
  '[Deaths] Load Data Failure',
  props<{ error: HttpErrorResponse }>()
);

export const SelectWeek = createAction(
  '[Deaths] Select Week Ending Date',
  props<{ week: string }>()
);
