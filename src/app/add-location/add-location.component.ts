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
@Output() hideModal = new EventEmitter();
 constructor(){
  let formControls = {
    latitude: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/)
    ]),
    longitude: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^-?((1[0-7]\d(\.\d+)?|180(\.0+)?)|(\d{1,2}(\.\d+)?))$/)
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
closeModal(){
  this.hideModal.emit();
}
}
