import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, first } from 'rxjs/operators';
import { AppState } from '../state/app.state';
import { SelectWeek } from './state/deaths.actions';
import {
  SelectedWeek,
  SelectedWeekData,
  SelectLoading,
  SelectWeeks,
} from './state/deaths.selectors';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss'],
})
export class DeathsComponent implements OnInit {
  deaths$ = this.store.select(SelectedWeekData);
  weeks$ = this.store.select(SelectWeeks);
  loading$ = this.store.select(SelectLoading);
  week = this.fb.control([]);

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.week.valueChanges.subscribe((week: string) => {
      this.store.dispatch(SelectWeek({ week }));
    });

    this.store
      .select(SelectedWeek)
      .pipe(
        filter((c) => !!c),
        first()
      )
      .subscribe((week: string) => {
        if (week) {
          this.week.setValue(week, { emitEvent: false });
        }
      });
  }
}
