import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ReportsComponent } from './reports/reports.component';
import {MatIconModule} from '@angular/material/icon';
import { ReportsRowComponent } from './reports-row/reports-row.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateReportFormComponent } from './create-report-form/create-report-form.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ReportsComponent,
    ReportsRowComponent,
    CreateReportFormComponent,
    AddLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
