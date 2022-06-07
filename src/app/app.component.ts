import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, retry } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadcurrenyApi } from './currencyApi.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currency-converter';
  activeItemIndex: any;
  targetCurrency: any;
  getCurrencies: any[] = [];
  getTargetValue: any;
  currencies$: Observable<any> = this.store.select((state) => {
    return state.currency.currencies;
  });
  constructor(private store: Store<{ currency: { currencies: any[] } }>) {}
  ngOnInit(): void {
    this.store.dispatch(LoadcurrenyApi(null));
    this.currencies$.subscribe((res) => {
      this.getCurrencies = res;
    });
  }
  targetvalue(item: any) {
    this.getTargetValue = item;
    console.log(this.targetCurrency);
    this.store.dispatch(LoadcurrenyApi({ data: this.targetCurrency }));
  }
  addcurrency() {
    this.targetCurrency.key;
  }
}
