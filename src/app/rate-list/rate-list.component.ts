import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadcurrenyApi } from '../currencyApi.actions';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.css'],
})
export class RateListComponent implements OnInit {
  currenciesAarray: any[] = [];
  readonly columns = ['key', 'value'];
  currencies$: Observable<any> = this.store.select((state) => {
    return state.currency.currencies;
  });

  constructor(
    private store: Store<{currency: { currencies: any[];};}>) {}

  ngOnInit(): void {
    this.store.dispatch(LoadcurrenyApi());
    this.currencies$.subscribe((res) => {
      this.currenciesAarray = res;
    });
  }
}
