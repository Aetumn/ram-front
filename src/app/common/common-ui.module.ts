import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from '../routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ]
})
export class CommonUIModule {
}
