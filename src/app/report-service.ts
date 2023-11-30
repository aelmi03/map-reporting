import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import NuisanceReport from './types/nuisance_report';
import uniqid from 'uniqid';

interface ReportDocument {
  data:NuisanceReport;
  key:string;
}
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reportsSubject:BehaviorSubject<NuisanceReport[]> = new BehaviorSubject<NuisanceReport[]>([]);
 reportsObservable = this.reportsSubject.asObservable();
  constructor(private httpClient:HttpClient) { 
    this.getReports();
  }
  getReports(){
    this.httpClient.get<ReportDocument[]>('https://272.selfip.net/apps/Nt9K3oiyhy/collections/reportsCollection/documents/').subscribe(
      (document) => {
        console.log(document);
        const newData : NuisanceReport[] = document.map((reportDocument)=>{
          const data : NuisanceReport = reportDocument.data
          data.date = new Date(data.date);
          return data;
        });
        this.reportsSubject.next(newData);

      }
    )
  }
  addReport(report:NuisanceReport){
    const uniqueId = uniqid();
    report.id = uniqueId;
    const objectToSend = {
      "data": report,
      key:uniqueId
    }
    this.httpClient.post<NuisanceReport>('https://272.selfip.net/apps/Nt9K3oiyhy/collections/reportsCollection/documents/', objectToSend).subscribe((value) => {
      this.getReports();
    }, (error) => {
      console.log("error fetching reports after posting " + error );
    })
  }
  deleteReport(report:NuisanceReport){
    this.httpClient.delete<NuisanceReport>(`https://272.selfip.net/apps/Nt9K3oiyhy/collections/reportsCollection/documents/${report.id}`).subscribe((value) => {
      this.getReports();
    }, (error) => {
      console.log("error fetching reports after deleting " + error );

    })
  }
  updateReport(report:NuisanceReport){
    const objectToSend = {
      "data": report,
      key:report.id
    }
    this.httpClient.put<NuisanceReport>(`https://272.selfip.net/apps/Nt9K3oiyhy/collections/reportsCollection/documents/${report.id}`, objectToSend).subscribe((value) => {
      this.getReports();
    }, (error) => {
      console.log("error fetching reports after updating " + error );

    })
  }
}
