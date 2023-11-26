import { Pipe, PipeTransform } from '@angular/core';
import NuisanceReport, { Location } from './types/nuisance_report';

@Pipe({
  name: 'report',
})
export class ReportPipe implements PipeTransform {

  transform(locations: Location[]): Location[] {
   
   const uniqueLocations : Location[] = Array.from(new Set(locations.map((location) => JSON.stringify(location)))).map((location) => JSON.parse(location)) as Location [];
    console.log(locations);
    console.log("AFTER");
    console.log(uniqueLocations);
   return uniqueLocations;
  }

}
