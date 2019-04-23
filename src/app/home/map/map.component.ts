import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';


export class MapComponent implements OnInit {
    @ViewChild('map') mapElement: any;
    map: google.maps.Map;
    ngOnInit(): void {
        const mapProperties = {
            center: new google.maps.LatLng(35.2271, -80.8431),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    }
}
// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.sass']
// })
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
