import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteService } from './services/quote.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeaderModule} from './header/header.module';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [QuoteService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
