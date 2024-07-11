import { AfterViewInit, Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correct property name for styles
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'MarjellaMaps';
  map!: mapboxgl.Map;

  accessToken = 'pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg';

  constructor() {
    (mapboxgl as any).accessToken = this.accessToken;
  }

  mapLocation = {
    longitude: 28.0473,
    latitude: -26.2041
  };

  ngOnInit(): void {
    this.defaultMap();
  }
  
  ngAfterViewInit(): void {
    const sidemenu = document.querySelector('.side-menu') as HTMLDivElement;
    const outputScreen = document.querySelector('#output-screen') as HTMLElement;

    const sidemenuWidth = sidemenu.offsetWidth;
    outputScreen.style.left = `${sidemenuWidth}px`;
    console.log(sidemenuWidth);
  }

  defaultMap() {
    this.map = new mapboxgl.Map({
      container: 'map', // ID of the map container element
      style: 'mapbox://styles/mapbox/streets-v11', // Predefined Mapbox style URL
      center: [this.mapLocation.longitude, this.mapLocation.latitude],
      zoom: 16,
    });

    this.map.on('load', () => {
      this.map.setConfigProperty("basemap","lightPreset","dawn")
    });
  }
}
