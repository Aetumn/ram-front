import { Component, OnInit } from '@angular/core';

import { Quote } from '../../quotes/beans/quote';
import { QuoteService } from '../../quotes/services/quote.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService ) { }

  getQuotes(): void {
    this.quoteService.getQuotes()
      .subscribe(quotes => this.quotes = quotes.slice(1,5));
  }

  ngOnInit() {
   this.getQuotes();
  }


}
