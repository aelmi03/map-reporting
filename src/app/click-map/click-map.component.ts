import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import * as L from 'leaflet';

export interface LatLong { 
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-click-map',
  templateUrl: './click-map.component.html',
  styleUrls: ['./click-map.component.css']
})
export class ClickMapComponent implements OnInit {
  private map!: L.Map;
  @Output() locationSelected:EventEmitter<LatLong> = new EventEmitter();
  constructor(){
   
  }
  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/"
    this.showMap();
    this.addClickListener();
   
  }
  showMap() {
    this.map = L.map('mapid').setView([49.27, -123], 11);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',

    }).addTo(this.map);
    
  }
  addClickListener(){
    this.map.on('click', (e) => {
      this.map.eachLayer((layer) => {
        if(layer instanceof L.Marker){
          this.map.removeLayer(layer);
        }
      });
      const latitude:number = parseFloat(e.latlng.lat.toFixed(4));
      const longitude:number = parseFloat(e.latlng.lng.toFixed(4));

      const marker = L.marker([latitude, longitude]).addTo(this.map);
      this.locationSelected.emit({latitude:latitude, longitude:longitude});
    });
  }

}
