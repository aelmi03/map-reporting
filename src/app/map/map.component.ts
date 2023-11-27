import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ReportService } from '../report-service';
import NuisanceReport from '../types/nuisance_report';
import { Location } from '../types/nuisance_report';

interface LocationWithCount {
  location:Location;
  count:number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map!: L.Map;
  locations:LocationWithCount[] = [] 
  constructor(private reportService:ReportService){
   
  }
  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/"
    this.initializeMap();
      this.reportService.reportsObservable.subscribe((allReports)=>{
        this.initializeMapData(allReports);

       })
  }
  initializeMapData(allReports:NuisanceReport[]){
    const uniqueLocations:Map<string, number> = new Map();
    for(let i=0;i<allReports.length;i++){
      const stringObject = JSON.stringify(allReports[i].location);
      if(uniqueLocations.has(stringObject)){
        uniqueLocations.set(stringObject, uniqueLocations.get(stringObject)! + 1);
      }
      else{
        uniqueLocations.set(stringObject, 1);
      }
    }
    this.locations = [...uniqueLocations.entries()].map((
      [key, value])=>{
        return {location:JSON.parse(key), count:value};
      }
    );
    this.putLabels();
  }
  initializeMap(){
    this.map = L.map('mapid').setView([49.27,-123],11);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',

    });
    tiles.addTo(this.map);
  }
  putLabels() {
    this.map.eachLayer((layer) => {
      if(layer instanceof L.Marker){
        this.map.removeLayer(layer);
      }
    });
    this.locations.forEach((locationWithCount) => {
      console.log(locationWithCount);
      L.marker([locationWithCount.location.latitude, locationWithCount.location.longitude]).addTo(this.map).bindPopup(
        "<b>" + locationWithCount.location.placeName + "</b><br />" + locationWithCount.count + (locationWithCount.count === 1 ? ` nuisance report` : " nuisance reports")
      )

    });
    // L.marker([49.2276, -123.0076]).addTo(this.map)
  	// 	.bindPopup("<b>Metortown</b><br />2 nuisance reports")
    // L.marker([49.300054, -123.148155]).addTo(this.map)
    // 	.bindPopup("<b>Stanley Park</b><br />5 nuisance reports")
    // L.marker([49.2781, -122.9199]).addTo(this.map)
    // 	.bindPopup("<b>SFU Burnaby</b><br />2 nuisance reports")

  }
}
