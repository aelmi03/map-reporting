import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: '[app-add-location]',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
 form:FormGroup;
 @Output() addLocation = new EventEmitter<Location>();

 constructor(){
  let formControls = {
    latitude: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    longitude: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    placeName: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
  }
  this.form = new FormGroup(formControls);
 }
onSubmit(value:Location){
  this.addLocation.emit(value);
  this.form.reset();
}
}
