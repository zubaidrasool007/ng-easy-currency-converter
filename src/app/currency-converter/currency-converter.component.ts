import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadcurrenyApi } from '../currencyApi.actions';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent implements OnInit {
  targetCurrency: any;
  targetCurrencyValue: any;
  baseCurrency: any;
  baseCurrencyValue: any;
  inputValue: any = '';
  currencyResult: any = 0;
  readonly testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });
  currenciesAarray: any[] = [];
  readonly columns = ['key', 'value'];
  currencies$: Observable<any> = this.store.select((state) => {
    return state.currency.currencies;
  });
  constructor(private store: Store<{ currency: { currencies: any[] } }>) {}
  ngOnInit(): void {
    this.currencies$.subscribe((res) => {
      this.currenciesAarray = res;
    });
  }
  baseSubmit(data: any) {
    this.baseCurrencyValue = data;
  }
  targetSubmit(data: any) {
    this.targetCurrencyValue = data;
  }
  convertCurrency() {
    console.log(this.inputValue);
    this.currencyResult = (
      (this.inputValue / this.baseCurrencyValue.value) *
      this.targetCurrencyValue.value
    ).toFixed(2);
  }
}
