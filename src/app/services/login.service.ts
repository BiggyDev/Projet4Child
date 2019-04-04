import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {

    }

    getClient(email: string, password: string) {
        const client = {
            email: '',
            password: ''
        };
        client.email = email;
        client.password = password;
        this.http.get('http://localhost:8000/api/clients');
        if (client.email === ) {

        }
    }

}
