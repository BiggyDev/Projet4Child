import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProfileproService} from '../../services/profilepro.service';

@Component({
  selector: 'app-profile-pro',
  templateUrl: './profile-pro.component.html',
  styleUrls: ['./profile-pro.component.sass']
})
export class ProfileProComponent implements OnInit {

  constructor(private profileProService: ProfileproService) { }

  addInfos(form: NgForm) {
    const name = form.value.name;
    const lastname = form.value.lastname;
    const phone = form.value.phone;
    const age = form.value.age;
    const gender = form.value.gender;
    const description = form.value.info;

    this.profileProService.addInfos(name, lastname, phone, age, gender, description);
  }

  ngOnInit() {
    const id = '';
    this.profileProService.getIdProvider();
    this.profileProService.getInfos(id);
  }

}
