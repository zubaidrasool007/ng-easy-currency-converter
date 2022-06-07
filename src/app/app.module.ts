import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { RateListComponent } from './rate-list/rate-list.component';
import { TuiCardModule } from '@taiga-ui/addon-commerce';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiDropdownModule } from '@taiga-ui/core';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyApiEffects } from './currencyApi.effects';
import { currencyReducer } from './currencyApi.reducer';

export class MyModule {}
@NgModule({
  declarations: [AppComponent, CurrencyConverterComponent, RateListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiTabsModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiCardModule,
    TuiInputModule,
    TuiDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiTableModule,
    TuiInputNumberModule,
    TuiTablePaginationModule,
    TuiScrollbarModule,
    StoreModule.forRoot({ currency: currencyReducer }),
    EffectsModule.forRoot([CurrencyApiEffects]),
    EffectsModule.forFeature([CurrencyApiEffects]),
  ],

  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
