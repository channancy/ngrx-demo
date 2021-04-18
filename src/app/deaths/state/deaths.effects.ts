import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, tap, mergeMap } from 'rxjs/operators';
import { CovidService } from '../../services/covid.service';
import * as SearchActions from '../../search/state/search.actions';
import { DeathsService } from 'src/app/services/deaths.service';

@Injectable()
export class DeathsEffects {
  constructor(
    private actions$: Actions,
    private deathsService: DeathsService
  ) {}

  logActions$ = createEffect(
    () => this.actions$.pipe(tap((action) => console.log(action))),
    { dispatch: false }
  );
}
