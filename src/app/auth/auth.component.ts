import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';
import { Client } from '../client';
import { Provider } from '../provider';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    clients: Client[];
    providers: Provider[];

    constructor(private authService: AuthService) {}

    addClient(email: string, password: string): void {
        email = email.trim();
        password = password.trim();
        if (!email && !password) { return; }
        this.authService.addClient(email, password)
            .subscribe(client => {
                this.clients.push(client);
            });
    }

    addProvider(email: string, password: string): void {
        email = email.trim();
        password = password.trim();
        if (!email && !password) { return; }
        this.authService.addProvider(email, password)
            .subscribe(provider => {
                this.providers.push(provider);
            });
    }

    ngOnInit() {

        $('.sing-in').click(function(e) {
            const button = $(this);

            if (button.hasClass('button-transparent')) {
                e.preventDefault();
                $('.floating-content').addClass('active');
                $('.sing-in-panel').addClass('active');
                $('.sing-up-panel').removeClass('active');
            }

        });

        $('.sing-up').click(function(e) {
            const button = $(this);

            if (button.hasClass('button-transparent')) {
                e.preventDefault();
                $('.floating-content').removeClass('active');
                $('.sing-in-panel').removeClass('active');
                $('.sing-up-panel').addClass('active');
            }

        });
    }


}
