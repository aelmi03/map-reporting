import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import NuisanceReport from '../types/nuisance_report';
import { Location } from '../types/nuisance_report';
@Component({
  selector: 'app-create-report-form',
  templateUrl: './create-report-form.component.html',
  styleUrls: ['./create-report-form.component.css']
})
export class CreateReportFormComponent {
  form:FormGroup;
  showLocationModal:boolean
  selectedLocation:Location
  locations:Location[]
  constructor(){
    
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
    this.selectedLocation = this.locations[0];
    this.showLocationModal=false;
    this.form = new FormGroup(formControls);
  }
  onSubmit(value:NuisanceReport){
    console.log(value);
    console.log(this.form.valid);
  }

  phoneNumberValidator(control:AbstractControl){
    if(control.value == ''){
      return null;
    }
    let value:string = control.value || '';
   return Validators.pattern(/^\d{10}$/)(control);
  }
  toggleModal(){
        console.log(this.showLocationModal);
    this.showLocationModal=!this.showLocationModal;    
  }
}
