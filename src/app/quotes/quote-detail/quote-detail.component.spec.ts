import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {QuoteDetailComponent} from './quote-detail.component';

describe('QuoteDetailComponent', () => {

  let comp: QuoteDetailComponent;
  let fixture: ComponentFixture<QuoteDetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteDetailComponent], // declare the test component
    });

    fixture = TestBed.createComponent(QuoteDetailComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;

    /* it('should display original title', () => {
       fixture.detectChanges();
       expect(el.textContent).toContain(comp.quote.text);
     });*/


  });
});


