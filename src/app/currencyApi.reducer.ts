import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { LoadcurrenyApi, LoadSuccesscurrencyApi } from './currencyApi.actions';
// import { currencyArray } from "./currencyApi.states";

interface Applicationstate{
    currencies:any[];
}
const InitialState:Applicationstate = {
  currencies: [],
};
const _currencyReducer = createReducer(
  InitialState,
  on(LoadcurrenyApi, (state:any, action:any)=>{
    return {...state, currencies: action.payload}
  }),

  on(LoadSuccesscurrencyApi, (state, {currencies}) => {
    const currenciesData: any[] = [];
    for (const [key, value] of Object.entries(
    currencies.conversion_rates)) 
    {
      const data = { key: key, value: value };
      currenciesData.push(data);
    }

   
    console.log('dataaa', currenciesData);
    return { ...state, currencies: currenciesData };
  })
);

export function currencyReducer(state: any, action: any) {
  return _currencyReducer(state, action);
}
