import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment as config } from '../../../environments/environment';

@Injectable()
export class ProfileService {
    apiBaseUrl;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
    }

    fetch(): Observable<Object> {
        const url = `${this.apiBaseUrl}/api/user/profile`;
        return this.httpClient.get(url);
    }
}
