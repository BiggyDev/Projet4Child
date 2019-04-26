import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileclientService {

  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  addChild(name: string, lastname: string, age: any, gender: string, info: string) {
      const child = {
          name: '',
          lastname: '',
          age: '',
          gender: '',
          info: ''
      };
      child.name = name;
      child.lastname = lastname;
      child.age = age;
      child.gender = gender;
      child.info = info;
      this.http.post(this.apiUrl + 'children', child)
                .subscribe(
                    () => {
                        window.alert('Succès !');
                    },
                    () => {
                        window.alert('Erreur...');
                    }
                );
  }

  getChildren() {
      this.http.get('http://localhost:8000/api/client/' + /* id client */ + '/children/');
  }

  addInfos(name: string, lastname: string, phone: any, age: any, gender: string, description: string) {
      const infos = {
          name: '',
          lastname: '',
          phone: '',
          age: '',
          gender: '',
          description: ''
      };
      infos.name = name;
      infos.lastname = lastname;
      infos.phone = phone;
      infos.age = age;
      infos.gender = gender;
      infos.description = description;
      const id = 1;
      this.http.post(this.apiUrl + '/clients/profil/edit/' + id, infos)
          .subscribe(
              () => {
                  window.alert('Succès !');
                  console.log(infos);
              },
              () => {
                  window.alert('Erreur...');
                  console.log(infos);
              }
          );
  }
}
