import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchService {
    baseUrl = 'https://api.cdnjs.com/libraries';
    queryUrl = '?search=';
    fieldsUrl = '&fields=name,version,description';

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.pipe(debounceTime(400),
            distinctUntilChanged(),
            switchMap(term => this.searchEntries(term))
        );
    }

    searchEntries(term) {
        return this.http.get(this.baseUrl + this.queryUrl + term + this.fieldsUrl)
            .pipe(
                map(res => res)
            );
    }
}
