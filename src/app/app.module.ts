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
import { ReportService } from './report-service';
import { ReportPipe } from './report.pipe';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { PasswordComponent } from './password/password.component';
import { PhonePipe } from './phone.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ReportsComponent,
    ReportsRowComponent,
    CreateReportFormComponent,
    AddLocationComponent,
    ReportPipe,
    MainComponent,
    MoreInfoComponent,
    PasswordComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
