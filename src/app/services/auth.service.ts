import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    apiUrl = environment.apiUrl;

    public addClient(email: string, password: string) {
        const client = {
            email: '',
            password: ''
        };
        client.email = email;
        client.password = password;
        this.http.post(this.apiUrl + '/clients/register/' + email + '/' + password, client)
            .subscribe(
                () => {
                    window.alert('Succès !');
                    console.log(client);
                },
                () => {
                    window.alert('Erreur...');
                    console.log(client);
                }
            );
    }

    addProvider(email: string, password: string) {
        const provider = {
            email: '',
            password: ''
        };
        provider.email = email;
        provider.password = password;
        this.http.post( this.apiUrl + '/providers', provider)
            .subscribe(
                () => {
                    window.alert('Succès !');
                    console.log(provider);
                },
                () => {
                    window.alert('Erreur...');
                    console.log(provider);
                }
            );
    }

}
