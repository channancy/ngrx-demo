import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Deaths } from './deaths';

export const select = (state: AppState) => state;
export const SelectDeaths = createSelector(select, (state: AppState) =>
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
export const WeekEndingDates = createSelector(
  SelectDeaths,
  (deaths: Deaths[]) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: Book) => book.userId === selectedUser.id);
    } else {
      return allBooks;
    }
  }
);
