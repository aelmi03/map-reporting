import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import NuisanceReport from '../types/nuisance_report';

@Component({
  selector: 'app-create-report-form',
  templateUrl: './create-report-form.component.html',
  styleUrls: ['./create-report-form.component.css']
})
export class CreateReportFormComponent {
  form:FormGroup;
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
}
