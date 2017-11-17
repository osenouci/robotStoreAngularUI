import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


import { CredentialsStorage } from './credentials.store';

/**
 * Adds the access token to the headers.
 */
export class AuthInterceptor {

    protected credentialsStorage:CredentialsStorage = new CredentialsStorage();

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

        let headers     = req.headers;
        let authHeaders = {};

        // Add the access token
        if(this.credentialsStorage.password && this.credentialsStorage.username) {
            authHeaders["Authorization"] = "Basic " + btoa(`${this.credentialsStorage.username}:${this.credentialsStorage.password}`);
        }
        const clonedRequest = req.clone({ setHeaders: authHeaders });
        return next.handle(clonedRequest);
    }
}