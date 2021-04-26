import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import {
  SelectDeaths,
  SelectedWeek,
  SelectedWeekData,
  SelectWeeks,
} from './state/deaths.selectors';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss'],
})
export class DeathsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(SelectDeaths).subscribe((x) => console.log(x));
    this.store.select(SelectWeeks).subscribe((x) => console.log(x));
    this.store.select(SelectedWeek).subscribe((x) => console.log(x));
    this.store.select(SelectedWeekData).subscribe((x) => console.log(x));
  }
}
