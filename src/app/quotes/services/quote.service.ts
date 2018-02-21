import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Quote} from '../beans/quote';
import {QUOTES} from '../beans/mock-quotes';

@Injectable()
export class QuoteService {

  constructor() {
  }

  ngOnInit() {
    this.getQuotes();
  }

  getQuote(id: number): Observable<Quote> {
    // Todo: send the message _after_ fetching the hero
    return of(QUOTES.find(quote => quote.id === id));
  }

  getQuotes(): Observable<Quote[]> {
    return of(QUOTES);
  }

}

// you're not the only one
// walkin' 'round with a loaded gun
