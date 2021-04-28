import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as CovidActions from '../covid/state/covid.actions';
import * as DeathsActions from '../deaths/state/deaths.actions';
@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private _snackBar: MatSnackBar) {}

  displayErrorMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CovidActions.LoadDataFailure, DeathsActions.LoadDataFailure),
        tap(({ error }) => {
          this._snackBar.open(
            `Failed to retrieve stats. Status: ${error.status}.`,
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

  logActions$ = createEffect(
    () => this.actions$.pipe(tap((action) => console.log(action))),
    { dispatch: false }
  );
}
