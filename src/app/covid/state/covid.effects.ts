import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, filter, tap } from 'rxjs/operators';
import { CovidService } from '../../services/covid.service';
import * as SearchActions from '../../search/state/search.actions';
import * as CovidActions from './covid.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CovidEffects {
  constructor(
    private actions$: Actions,
    private covidService: CovidService,
    private _snackBar: MatSnackBar
  ) {}

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

  displayErrorMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CovidActions.LoadDataFailure),
        tap(({ error }) => {
          this._snackBar.open(
            `Failed to retrieve COVID-19 stats. Status: ${error.status}.`,
            'Close',
            {
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );
        })
      );
    },
    { dispatch: false }
  );
}
