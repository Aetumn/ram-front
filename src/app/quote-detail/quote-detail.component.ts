import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuoteService }  from '../quote.service';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote; 

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getQuote();
  }

  goBack(): void {
    this.location.back();
  }

  getQuote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quoteService.getQuote(id)
      .subscribe(quote => this.quote = quote);
  }
}
