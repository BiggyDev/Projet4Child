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

    addProvider(email: string, password: string, token: string): void {
        email = email.trim();
        password = password.trim();
        token = this.generate_token(255).trim();
        if (!email && !password && !token) { return; }
        this.authService.addProvider({ email, password, token } as Provider)
            .subscribe(provider => {
                this.providers.push(provider);
            });
    }

    private generate_token(length) {
        const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
        const b = [];
        for (let i = 0; i < length; i++) {
            const j = (Math.random() * (a.length - 1)).toFixed(0);
            b[i] = a[j];
        }
        return b.join('');
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
