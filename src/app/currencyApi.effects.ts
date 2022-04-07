import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs';
import { LoadcurrenyApi, LoadSuccesscurrencyApi } from './currencyApi.actions';
import { DataService } from './data.service';

@Injectable()
export class CurrencyApiEffects {
  LoadcurrenyApi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadcurrenyApi),
      mergeMap(() =>
        this.service.getcurrencyData()
          .pipe(
            map((currencyData) =>
              LoadSuccesscurrencyApi({ currencies: currencyData })
            )
          )
      )
    )
  );
  constructor(private actions$: Actions, private service: DataService) {}
}
