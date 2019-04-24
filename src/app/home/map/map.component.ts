import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})

export class MapComponent implements OnInit {
    latitude: number;
    longitude: number;
    zoom: number;
    mapType = 'roadmap';

    ngOnInit(){
        this.setCurrentLocation();
    }
    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }

}
// export class MapComponent implements OnInit {
//
//   constructor(private http: HttpClient){
//     }
//
//   ngOnInit() {
//       const nannymap = L.map('map').setView([49.4431, 1.0993], 12);
//
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//           attribution: 'Nanny Map'
//       }).addTo(nannymap);
//       const markerIcon = L.icon({
//           iconUrl: '../../../assets/img/marker.png',
//           iconSize:     [38, 38], // size of the icon
//           iconAnchor:   [22, 37], // point of the icon which will correspond to marker's location
//           shadowAnchor: [4, 62],  // the same for the shadow
//           popupAnchor:  [-3, -76]
//       });
//       const marker = L.marker([49.4431, 1.0993], {icon: markerIcon}).addTo(nannymap).openPopup();
//       marker.bindPopup('Je suis a rouen');
//
//       this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
//           data.records.forEach(podotactile => {
//               L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: markerIcon}).addTo(nannymap);
//           });
//       });
//
//   }
//
// }
