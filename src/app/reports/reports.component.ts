import { Component } from '@angular/core';
import NuisanceReport from '../types/nuisance_report';
import { ReportService } from '../report-service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports: NuisanceReport[];
  selectedReport:NuisanceReport;
  showPassWordModal:boolean = false;
  reportToDelete:NuisanceReport;
  sortedMetric:string = "";
  constructor(private reportService:ReportService) {
    this.reports = [];
    this.reportToDelete = (null as any) as NuisanceReport;
    this.selectedReport = (null as any) as NuisanceReport;
    this.reportService.reportsObservable.subscribe((allReports)=>{
      this.reports = allReports;
      if(this.sortedMetric === "location"){
        this.sortByLocation();
      }
      else if (this.sortedMetric === "baddieName"){
        this.sortByBaddieName();
      }
      else{
        this.sortByDate();
      }
    })
    // for (let i = 0; i < 5; i++) {
    //   const report: NuisanceReport = {
    //     reportingPerson: `Person ${i + 1}`,
    //     troubleMakerInfo: `Trouble info ${i + 1}`,
    //     location: {latitude:0, longitude:0, placeName:`Location ${i + 1}`},
    //     pictureLink: `https://example.com/image${i + 1}.jpg`,
    //     extraInfo: `Extra info ${i + 1}`,
    //     date: new Date(), 
    //     status: (i % 2 == 0) ? 'OPEN' : 'RESOLVED', 
    //     id: `id${i + 1}`
    //   };
  
    //   this.reports.push(report);
    // }
  }
  sortByLocation() {
    this.reports.sort((a, b) => {
     return a.location.placeName.localeCompare(b.location.placeName);
    });
    this.sortedMetric="location"
  }
  sortByBaddieName() {
    this.reports.sort((a, b) => {
     return a.troubleMakerInfo.localeCompare(b.troubleMakerInfo);
    });
    this.sortedMetric="baddieName"
  }
  sortByDate() {
    this.reports.sort((a, b) => {
     return a.date.getTime() - b.date.getTime();
    });
    this.sortedMetric="date"
  }
  closeMoreInfo(){
    this.selectedReport = (null as any) as NuisanceReport;
  }
  showMoreInfo(report:NuisanceReport){
    this.selectedReport = report;
    console.log("WE MADE IT");
  }
  togglePasswordModal(){
    this.showPassWordModal = !this.showPassWordModal;
  }
 handleDeleteClick(report:NuisanceReport){
  this.reportToDelete = report;
  this.togglePasswordModal();
 }
  handleResult(result:boolean){
    if(result){
      this.reportService.deleteReport(this.reportToDelete);
      this.togglePasswordModal();
    }
    else{
      this.togglePasswordModal()
    }
  }
}
