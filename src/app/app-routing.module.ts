import { NgModule, RootRenderer } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from './quotes/quotes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { QuoteDetailComponent }  from './quote-detail/quote-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'quotes', component: QuotesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: QuoteDetailComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {


 }
