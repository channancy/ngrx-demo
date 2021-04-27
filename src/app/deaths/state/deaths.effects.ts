import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, filter, tap } from 'rxjs/operators';
import { DeathsService } from '../../services/deaths.service';
import * as SearchActions from '../../search/state/search.actions';
import * as DeathsActions from './deaths.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class DeathsEffects {
  constructor(
    private actions$: Actions,
    private deathsService: DeathsService,
    private _snackBar: MatSnackBar
  ) {}

  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.SelectState),
      filter(({ state }) => !!state),
      switchMap(({ state }) =>
        this.deathsService.getDeathsDataByState(state.name).pipe(
          map((data) => DeathsActions.LoadData({ data })),
          catchError((error) => of(DeathsActions.LoadDataFailure({ error })))
        )
      )
    );
  });

  displayErrorMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DeathsActions.LoadDataFailure),
        tap(({ error }) => {
          this._snackBar.open(
            `Failed to retrieve death stats. Status: ${error.status}.`,
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
