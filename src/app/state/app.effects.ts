import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  logActions$ = createEffect(
    () => this.actions$.pipe(tap((action) => console.log(action))),
    { dispatch: false }
  );
}
