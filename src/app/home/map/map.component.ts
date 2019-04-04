import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: 'Frugal Map'
      }).addTo(myfrugalmap);
  }

}
