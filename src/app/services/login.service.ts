import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {}

    apiUrl = environment.apiUrl;

    getClient(email: string, password: string) {
        const client = {
            email: '',
            password: ''
        };
        client.email = email;
        client.password = password;
        this.http.get(this.apiUrl + '/clients')
            .subscribe(
                () => {
                    window.alert('Succès');
                    console.log();
                },
                () => {
                    window.alert('Erreur...');
                }
            );

    }

}
