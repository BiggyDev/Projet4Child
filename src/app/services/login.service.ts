import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Client } from '../client';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    apiUrl = environment.apiUrl;

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.apiUrl + '/clients')
            .pipe(
                tap(() => this.log('fetched clients')),
                catchError(this.handleError<Client[]>('getClients', []))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`LoginService: ${message}`);
    }

}
