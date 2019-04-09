import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { ProfileclientService } from '../../services/profileclient.service';


@Component({
  selector: 'app-profile-part',
  templateUrl: './profile-part.component.html',
  styleUrls: ['./profile-part.component.sass']
})
export class ProfilePartComponent implements OnInit {

  constructor(private profilePartService: ProfileclientService) { }

  // TODO: Function addChild
  addChild(form: NgForm) {
    const name = form.value['name'];
    const lastname = form.value['lastname'];
    const age = form.value['age'];
    const gender = form.value['gender'];
    const info = form.value['info'];

    this.profilePartService.addChild(name, lastname, age, gender, info);
  }

  addInfos(form: NgForm) {
    const name = form.value['name'];
    const lastname = form.value['lastname'];
    const phone = form.value['phone'];
    const age = form.value['age'];
    const gender = form.value['gender'];
    const description = form.value['info'];

    this.profilePartService.addInfos(name, lastname, phone, age, gender, description);
  }

  ngOnInit() {

    $('#addChildModal').on('shown.bs.modal', () => {
      $('#myInput').trigger('focus');
    });

    this.profilePartService.getChildren();
  }

}
