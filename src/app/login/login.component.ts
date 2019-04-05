import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {post} from 'selenium-webdriver/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const email = form.value['email'];
    const password = form.value['password'];

    this.loginService.getClient(email, password);
  }

}
