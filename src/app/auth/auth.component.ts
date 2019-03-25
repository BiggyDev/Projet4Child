import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

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
