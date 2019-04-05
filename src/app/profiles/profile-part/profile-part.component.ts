import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile-part',
  templateUrl: './profile-part.component.html',
  styleUrls: ['./profile-part.component.sass']
})
export class ProfilePartComponent implements OnInit {

  constructor() { }

  // TODO: Function addChild
  addChild(form: NgForm) {
    const child = {
      name: '',
      lastname: '',
      age: '',
      gender: '',
      info: ''
    };
    child.name = form.value['name'];
    child.lastname = form.value['lastname'];
    child.age = form.value['age'];
    child.gender = form.value['gender'];
    child.info = form.value['info'];
    this.
  }

  ngOnInit() {

    $('#addChildModal').on('shown.bs.modal', function() {
      $('#myInput').trigger('focus');
    });

  }

}
