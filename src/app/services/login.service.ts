import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient) {}

    apiUrl = environment.apiUrl;

    getClients() {
        return this.http.get(this.apiUrl + '/clients');
    }

    getClientsbyEmail() {
        return this.http.get(this.apiUrl + '/clients/');
    }
}
