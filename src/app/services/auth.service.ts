import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    addClient(email: string, password: string, confirmpassword: string) {
        const client = {
            email: '',
            password: '',
            confirmpassword: ''
        };
        client.email = email;
        client.password = password;
        client.confirmpassword = confirmpassword;
        this.httpClient
            .post('http://localhost:8000/api/clients.json', client)
            .subscribe(
                () => {
                    window.alert('Succès !');
                },
                () => {
                    window.alert('Erreur...');
                }
            );
    }

    addProvider(email: string, password: string, confirmpassword: string) {
        const provider = {
            email: '',
            password: '',
            confirmpassword: ''
        };
        provider.email = email;
        provider.password = password;
        provider.confirmpassword = confirmpassword;
        this.httpClient
            .post('http://localhost:8000/api/providers', provider)
            .subscribe(
                () => {
                    window.alert('Succès !');
                },
                () => {
                    window.alert('Erreur...');
                }
            );
    }

}
