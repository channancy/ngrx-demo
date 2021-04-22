import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { DeathsService } from '../../services/deaths.service';
import * as SearchActions from '../../search/state/search.actions';
import * as DeathsActions from './deaths.actions';

@Injectable()
export class DeathsEffects {
  constructor(
    private actions$: Actions,
    private deathsService: DeathsService
  ) {}

  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.SelectState),
      switchMap(({ state }) =>
        this.deathsService.getDeathsDataByState(state.name).pipe(
          map((data) => DeathsActions.LoadData({ data })),
          catchError((error) => of(DeathsActions.LoadDataFailure({ error })))
        )
      )
    );
  });
}
