import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { RateListComponent } from './rate-list/rate-list.component';

const routes: Routes = [
  {
    path:'home',
    component:CurrencyConverterComponent
  },
  {
    path:'table',
    component:RateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
