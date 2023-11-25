import { Component } from '@angular/core';
import NuisanceReport from '../types/nuisance_report';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports: NuisanceReport[];
  constructor(){
    this.reports = [];
    for (let i = 0; i < 5; i++) {
      const report: NuisanceReport = {
        reportingPerson: `Person ${i + 1}`,
        troubleMakerInfo: `Trouble info ${i + 1}`,
        location: `Location ${i + 1}`,
        pictureLink: `https://example.com/image${i + 1}.jpg`,
        extraInfo: `Extra info ${i + 1}`,
        date: new Date(), // You might adjust this to generate different dates
        status: `Pending` // Default status
      };
  
      this.reports.push(report);
    }
  }
}
