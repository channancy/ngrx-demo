import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Deaths } from './deaths';

export const select = (state: AppState) => state;
export const SelectLoading = (state: AppState) => state.deaths.loading;

export const SelectDeaths = createSelector(select, (state: AppState) =>
  state.deaths.stats
    ? state.deaths.stats.reduce((list, d) => {
        list.push({
          weekEndingDate: d.week_ending_date,
          allCause: d.all_cause ?? 'N/A',
          naturalCause: d.natural_cause ?? 'N/A',
          diabetes: d.diabetes_mellitus_e10_e14 ?? 'N/A',
          influenzaAndPneumonia: d.influenza_and_pneumonia_j09_j18 ?? 'N/A',
          heartDisease: d.diseases_of_heart_i00_i09 ?? 'N/A',
        });
        return list;
      }, [])
    : null
);

export const SelectWeeks = createSelector(SelectDeaths, (deaths: Deaths[]) =>
  deaths
    ? deaths.reduce((list, d) => {
        list.push(d.weekEndingDate);
        return list;
      }, [])
    : null
);

export const SelectedWeek = createSelector(
  select,
  (state: AppState) => state.deaths.weekEndingDate
);

export const SelectedWeekData = createSelector(
  SelectDeaths,
  SelectedWeek,
  (deaths: Deaths[], weekEndingDate: string) =>
    deaths && weekEndingDate
      ? deaths.find((death: Deaths) => death.weekEndingDate === weekEndingDate)
      : null
);
