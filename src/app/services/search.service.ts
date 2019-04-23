import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class SearchService {
    baseUrl: string = 'https://api.cdnjs.com/libraries';
    queryUrl: string = '?search=';
    fieldsUrl: string = '&fields=name,version,description';

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
    }

    searchEntries(term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term + this.fieldsUrl)
            .map(res => res)
    }
}