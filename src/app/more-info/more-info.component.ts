import { Component, EventEmitter } from '@angular/core';
import NuisanceReport from '../types/nuisance_report';
import{Input, Output} from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {
  @Input() report!:NuisanceReport;
  @Output() closeModal:EventEmitter<void> = new EventEmitter();
  constructor() { }

  close(){
    this.closeModal.emit();
  }
}
