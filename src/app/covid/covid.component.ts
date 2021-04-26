import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { SelectCovid, SelectLoading } from './state/covid.selectors';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  covid$ = this.store.select(SelectCovid);
  loading$ = this.store.select(SelectLoading);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
