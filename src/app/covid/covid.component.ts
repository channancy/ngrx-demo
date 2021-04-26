import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { SelectCovid } from './state/covid.selectors';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  covid$ = this.store.select(SelectCovid);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
