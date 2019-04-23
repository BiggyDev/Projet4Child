import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Client } from '../client';
import { Provider } from '../provider';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer JWT'
    })
};

@Injectable({ providedIn: 'root'})
export class AuthService {

    private apiUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    public addClient(email: string, password: string): Observable<Client> {
        return this.http.post(this.apiUrl + '/clients/' + email + '/' + password, { email, password }, httpOptions)
            .pipe(
                tap((newClient: Client) => this.log(`added client w/ id=${newClient.id}`)),
                catchError(this.handleError<Client>('addClient'))
            );
    }

    public addProvider(provider: Provider): Observable<Provider> {
        return this.http.post(this.apiUrl + '/providers/register/', provider, httpOptions)
            .pipe(
                tap((newProvider: Provider) => this.log(`added provider w/ id=${newProvider.id}`)),
                catchError(this.handleError<Provider>('addProvider'))
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
            // console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a AuthService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`AuthService: ${message}`);
    }
}
