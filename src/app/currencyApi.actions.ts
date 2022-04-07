import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
// import { CurrencyItem } from "./currencyApi.states";

export const LoadcurrenyApi=createAction('[currencyApi] LoadcurrenyApi')
export const LoadSuccesscurrencyApi=createAction('[currencyApi] LoadSuccesscurrencyApi',
props<any>())