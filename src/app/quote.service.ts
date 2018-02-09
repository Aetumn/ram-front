import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Quote } from './quote';
import { QUOTES } from './mock-quotes';
import { MessageService } from './message.service';

@Injectable()
export class QuoteService {

  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
    this.getQuotes();
  }

  getQuote(id: number): Observable<Quote> {
     // Todo: send the message _after_ fetching the hero
    this.messageService.add(`QuoteService: fetched quote id=${id}`);
   return of(QUOTES.find(quote => quote.id === id));
  }
  
  getQuotes(): Observable<Quote[]> {
    this.messageService.add('QuotesService: fetched quotes');
    return of(QUOTES);
  }

}
// you're not the only one
// walkin' 'round with a loaded gun