import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

export const select = (state: AppState) => state;
export const Covid = createSelector(select, (state: AppState) =>
  state.covid.stats
    ? {
        population: state.covid.stats.population,
        cases: state.covid.stats.actuals.cases,
        deaths: state.covid.stats.actuals.deaths,
        vaccinesDistributed: state.covid.stats.actuals.vaccinesDistributed,
        vaccinesAdministered: state.covid.stats.actuals.vaccinesAdministered,
      }
    : null
);
