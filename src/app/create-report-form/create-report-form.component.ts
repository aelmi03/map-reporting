import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import NuisanceReport from '../types/nuisance_report';
import { Location } from '../types/nuisance_report';
import { ReportService } from '../report-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-report-form',
  templateUrl: './create-report-form.component.html',
  styleUrls: ['./create-report-form.component.css']
})
export class CreateReportFormComponent {
  form:FormGroup;
  showLocationModal:boolean
  locations:Location[]
  constructor(private reportService:ReportService, private router:Router){
    
    let formControls = {
      reportingPerson: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      troubleMakerInfo: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      location: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      pictureLink: new FormControl('',[
       
      ]),
      extraInfo: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
     
      phoneNumber:new FormControl('', [
        this.phoneNumberValidator
      ] )
    }
     this.locations= [
      { placeName: 'New York', latitude: 40.7128, longitude: -74.0060 },
      { placeName: 'London', latitude: 51.5074, longitude: -0.1278 },
      { placeName: 'Paris', latitude: 48.8566, longitude: 2.3522 },
      { placeName: 'Tokyo', latitude: 35.6895, longitude: 139.6917 }
      // Add more this.locations as needed
    ];
    this.reportService.reportsObservable.subscribe((reports)=>{
      console.log("reportsObservable called");
      this.locations = [...this.locations, ...reports.map(report=>report.location)];
    });
    this.showLocationModal=false;
    this.form = new FormGroup(formControls);
  }
  onSubmit(value:NuisanceReport){
    console.log("ONSUBMIT CALLED");
    value.date = new Date();
    value.status = 'OPEN';
    this.reportService.addReport(value);
    this.form.reset();
    this.router.navigate(['/']);
  }

  phoneNumberValidator(control:AbstractControl){
    if(control.value == ''){
      return null;
    }
    let value:string = control.value || '';
   return Validators.pattern(/^\d{10}$/)(control);
  }
  toggleModal(){
    this.showLocationModal=!this.showLocationModal;
  }
  addNewLocation(newLocation:Location){
    console.log("addNewLocation called");
    this.locations = [newLocation, ...this.locations];
    console.log(this.locations);
    console.log("-------------");
    this.form.controls['location'].setValue(newLocation);
      }
}
