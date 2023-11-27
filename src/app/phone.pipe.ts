import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number): unknown {
    const stringValue:string = value.toString();
    return stringValue.slice(0,3) + "-" + stringValue.slice(3,6) + "-" + stringValue.slice(6);
  }

}
