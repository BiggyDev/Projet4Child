import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Client } from '../client';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    clients: Client[];

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.getClients();
        console.log('Les clients sont ' + this.getClients());
    }

    getClients() {
        this.loginService.getClients()
            .subscribe();
    }

}
