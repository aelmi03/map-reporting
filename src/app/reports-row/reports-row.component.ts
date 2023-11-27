import { Component, EventEmitter, Input, Output } from '@angular/core';
import NuisanceReport from '../types/nuisance_report';

@Component({
  selector: '[app-reports-row]',
  templateUrl: './reports-row.component.html',
  styleUrls: ['./reports-row.component.css']
})
export class ReportsRowComponent {
  @Input() report!: NuisanceReport;
  @Output() showReport: EventEmitter<NuisanceReport> = new EventEmitter();
  constructor(){

  }
  showMoreInfo(){
    this.showReport.emit(this.report);
  }
}
