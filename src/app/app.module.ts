import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/list/quotes.component';
import { QuoteDetailComponent } from './quotes/quote-detail/quote-detail.component';
import { AppRoutingModule } from './routing/app-routing.module';
import {CommonUIModule} from './common/common-ui.module';
import {QuotesModule} from './quotes/quotes.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUIModule,
    QuotesModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
