import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, filter, tap } from 'rxjs/operators';
import { CovidService } from '../../services/covid.service';
import * as SearchActions from '../../search/state/search.actions';
import * as CovidActions from './covid.actions';

@Injectable()
export class CovidEffects {
  constructor(private actions$: Actions, private covidService: CovidService) {}

  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.SelectState),
      filter(({ state }) => !!state),
      switchMap(({ state }) =>
        this.covidService.getCovidDataByState(state.abbreviation).pipe(
          map((data) => CovidActions.LoadData({ data })),
          catchError((error) => of(CovidActions.LoadDataFailure({ error })))
        )
      )
    );
  });
}
