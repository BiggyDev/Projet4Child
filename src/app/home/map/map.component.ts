import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../../services/map.service';
import { google } from '@agm/core/services/google-maps-types';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.sass'],
    providers: [MapService]
})

export class MapComponent implements OnInit {
    latitude: number;
    longitude: number;
    zoom: number;
    mapType = 'roadmap';
    address: string;
    private geoCoder;
    markers$: Observable<any>;

    @ViewChild('search')
    public searchElementRef: ElementRef;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private mapService: MapService
    ) {
    }

    ngOnInit() {
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder();

            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 8;
                });
            });
        });
        this.markers$ = this.getLocations();
    }

    getLocations(): Observable<any> {
        return this.mapService.getLocations();
    }

    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 7;
                this.getAddress(this.latitude, this.longitude);
            });
        }
    }

    markerDragEnd($event: MouseEvent) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    }

    getAddress(latitude, longitude) {
        this.geoCoder.geocode({location: {lat: latitude, lng: longitude}}, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                } else {
                    window.alert('Aucuns résultats trouvés');
                }
            } else {
                window.alert('Geocoder a échoué : ' + status);
            }
        });
    }
}
