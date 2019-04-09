import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {}

  public onSubmitClient(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const confirmpassword = form.value.confirmpassword;
    const error = 'Les mots de passes indiqués ne sont pas identiques';

    if (password === confirmpassword) {
      this.authService.addClient(email, password);
    } else {
      return error;
      window.alert(error);
    }
  }

  public onSubmitProvider(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const confirmpassword = form.value.confirmpassword;
    const error = 'Les mots de passes indiqués ne sont pas identiques';

    if (password === confirmpassword) {
      this.authService.addProvider(email, password);
    } else {
      return error;
    }
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
