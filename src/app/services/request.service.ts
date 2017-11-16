import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

import { environment } from './../../environments/environment';


@Injectable()
export class RequestService {

    protected serverURL:string;

    constructor(private httpClient: HttpClient) { 
        this.httpClient = httpClient;
        this.serverURL  = environment.serviceUrl;
    }
    
    /**
     * Performs an http GET request.
     * @param {string} url 
     */
    public get(url:string) {
        return this.httpClient
        .get(this.serverURL + url, {observe: 'response'});     
    }
    /**
     * Performs an http POST request.
     * @param {string} url 
     * @param {any} data 
     */
    public post(url:string, data:any):Observable<any> {
        return this.httpClient
        .post(this.serverURL + url, data, {observe: 'response'});
    }
    /**
     * Performs an http put request.
     * @param {string} url 
     * @param {any} data 
     */    
    public put(url:string, data:any){
        return this.httpClient
        .put(this.serverURL + url, data, {observe: 'response'});
    }
    /**
     * Performs an http delete request.
     * @param {string} url 
     */       
    public delete(url:string){

        return this.httpClient
        .delete(this.serverURL + url, {observe: 'response'});
    }
}