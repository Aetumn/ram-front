import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/list/quotes.component';
import { QuoteDetailComponent } from './quotes/quote-detail/quote-detail.component';
import { QuoteService } from './services/quote.service';
import { AppRoutingModule } from './routing/app-routing.module';
import {CommonUIModule} from './common/common-ui.module';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonUIModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
