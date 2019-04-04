import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  
  onLogin() {
    this.loginService.getClients();
  }

}
