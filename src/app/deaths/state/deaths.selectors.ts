import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

export const select = (state: AppState) => state;
export const Deaths = createSelector(select, (state: AppState) =>
  state.deaths.stats
    ? state.deaths.stats.reduce((list, d) => {
        list.push({
          weekEndingDate: d.week_ending_date,
          allCause: d.all_cause,
          naturalCause: d.natural_cause,
          diabetes: d.diabetes_mellitus_e10_e14,
          influenzaAndPneumonia: d.influenza_and_pneumonia_j09_j18,
          heartDisease: d.diseases_of_heart_i00_i09,
        });
        return list;
      }, [])
    : null
);
