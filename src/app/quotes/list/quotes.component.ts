import {Component, OnInit} from '@angular/core';
import {Quote} from '../beans/quote';
import {QuoteService} from '../services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})

export class QuotesComponent implements OnInit {

  quotes: Quote[];

  constructor(private quoteService: QuoteService) {
  }

  getQuotes(): void {
    this.quoteService.getQuotes()
      .subscribe(quotes => this.quotes = quotes);
  }

  ngOnInit() {
    this.getQuotes();
  }

}
