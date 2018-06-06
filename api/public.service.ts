/**
 * Slyce API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: admin@slyce.it
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PublicService {

    protected basePath = 'http://localhostnull';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiKeysMine(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiKeysMine(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiKeysMine(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiKeysMine(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (slyce-account-id) required
        if (this.configuration.apiKeys["slyce-account-id"]) {
            headers = headers.set('slyce-account-id', this.configuration.apiKeys["slyce-account-id"]);
        }

        // authentication (slyce-api-key) required
        if (this.configuration.apiKeys["slyce-api-key"]) {
            headers = headers.set('slyce-api-key', this.configuration.apiKeys["slyce-api-key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'multipart/form-data'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'multipart/form-data'
        ];

        return this.httpClient.get<any>(`${this.basePath}/api_keys/mine`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public validateWeld(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public validateWeld(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public validateWeld(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public validateWeld(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (slyce-account-id) required
        if (this.configuration.apiKeys["slyce-account-id"]) {
            headers = headers.set('slyce-account-id', this.configuration.apiKeys["slyce-account-id"]);
        }

        // authentication (slyce-api-key) required
        if (this.configuration.apiKeys["slyce-api-key"]) {
            headers = headers.set('slyce-api-key', this.configuration.apiKeys["slyce-api-key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'multipart/form-data'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'multipart/form-data'
        ];

        return this.httpClient.post<any>(`${this.basePath}/validate_weld`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public weldHighlighter(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public weldHighlighter(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public weldHighlighter(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public weldHighlighter(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (slyce-account-id) required
        if (this.configuration.apiKeys["slyce-account-id"]) {
            headers = headers.set('slyce-account-id', this.configuration.apiKeys["slyce-account-id"]);
        }

        // authentication (slyce-api-key) required
        if (this.configuration.apiKeys["slyce-api-key"]) {
            headers = headers.set('slyce-api-key', this.configuration.apiKeys["slyce-api-key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'multipart/form-data'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'multipart/form-data'
        ];

        return this.httpClient.get<any>(`${this.basePath}/weld_highlighter`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
