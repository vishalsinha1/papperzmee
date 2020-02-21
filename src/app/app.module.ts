import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PhotographerListingComponent } from './photographer-listing/photographer-listing.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SubscriberAdminComponent } from './subscriber-admin/subscriber-admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableModule} from 'angular-6-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ViewPhotographerComponent } from './view-photographer/view-photographer.component';
import { ViewSubscriberComponent } from './view-subscriber/view-subscriber.component';
import { NgxCheckboxModule } from 'ngx-checkbox';
import { BookingListComponent } from './booking-list/booking-list.component';
import { RatingStartComponent } from './rating-start/rating-start.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { AdvanceFilterComponent } from './advance-filter/advance-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavHeaderComponent,
    PhotographerListingComponent,
    DashboardAdminComponent,
    SubscriberAdminComponent,
    MainPageComponent,
    ViewPhotographerComponent,
    ViewSubscriberComponent,
    BookingListComponent,
    RatingStartComponent,
    ViewBookingComponent,
    AdvanceFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    HttpClientModule,
    FormsModule,
    NgxCheckboxModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
