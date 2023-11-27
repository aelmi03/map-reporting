import { Component, EventEmitter } from '@angular/core';
import NuisanceReport from '../types/nuisance_report';
import{Input, Output} from '@angular/core';
import { ReportService } from '../report-service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {
  @Input() report!:NuisanceReport;
  @Output() closeModal:EventEmitter<void> = new EventEmitter();
  showPassWordModal:boolean = false;
  constructor(private reportService:ReportService) { }

  close(){
    this.closeModal.emit();
  }
  togglePasswordModal(){
    this.showPassWordModal = !this.showPassWordModal;
  }
  changeStatus(){
    this.report.status = this.report.status === 'OPEN' ? 'RESOLVED' : 'OPEN';
    this.reportService.updateReport(this.report);
    this.showPassWordModal = false;
  }
  handleResult(result:boolean){
    if(result){
      this.changeStatus();
    }
    else{
      this.togglePasswordModal()
    }
  }
}
