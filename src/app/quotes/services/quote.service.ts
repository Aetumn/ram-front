import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Quote} from '../beans/quote';
import {QUOTES} from '../beans/mock-quotes';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuoteService implements OnInit {

  private quotesUrl = 'http://localhost:8080/quote';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuotes();
  }

  getQuote(id: number): Observable<Quote> {
    return of(QUOTES.find(quote => quote.id === id));
  }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl);
  }

}

// you're not the only one
// walkin' 'round with a loaded gun
