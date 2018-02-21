import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuotesComponent} from './list/quotes.component';
import {QuoteDetailComponent} from './quote-detail/quote-detail.component';
import {QuoteService} from './services/quote.service';
import {AppRoutingModule} from '../routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    QuotesComponent,
    QuoteDetailComponent
  ],
  declarations: [
    QuotesComponent,
    QuoteDetailComponent
  ],
  providers: [QuoteService]
})
export class QuotesModule { }
