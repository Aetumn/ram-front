import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {QuotesComponent} from '../quotes/list/quotes.component';
import {DashboardComponent} from '../common/dashboard/dashboard.component';
import {QuoteDetailComponent} from '../quotes/quote-detail/quote-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'quote/:id', component: QuoteDetailComponent}
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
