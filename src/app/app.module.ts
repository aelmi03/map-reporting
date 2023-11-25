import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsRowComponent } from './reports-row/reports-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ReportsComponent,
    ReportsRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
