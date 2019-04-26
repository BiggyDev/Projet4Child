import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {

    constructor(private http: HttpClient) { }

    BASE_URL = 'http://localhost:4200';
    LOCATIONS_URL = 'data.json';

    getLocations(): Observable<any> {
        return this.http
            .get(this.BASE_URL + this.LOCATIONS_URL);
    }
}
