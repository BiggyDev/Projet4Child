import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileproService {
    constructor(private http: HttpClient) {}

    apiUrl = environment.apiUrl;

    getIdProvider() {
        // TODO: Function getID provider
    }

    getInfos(id) {
        this.getIdProvider();
        this.http.get(this.apiUrl + '/providers/' + id);
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
        const id = '';
        this.http.post(this.apiUrl + '/providers/profil/edit/' + id, infos)
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
