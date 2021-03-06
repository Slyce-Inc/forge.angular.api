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

import { InlineResponse200 } from '../model/inlineResponse200';
import { NewAccountDoc } from '../model/newAccountDoc';
import { NewJobDoc } from '../model/newJobDoc';
import { UpdateAccountDoc } from '../model/updateAccountDoc';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AccountsService {

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
     * Create a new account
     * Create a new account.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAccount(body: NewAccountDoc, observe?: 'body', reportProgress?: boolean): Observable<NewJobDoc>;
    public createAccount(body: NewAccountDoc, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewJobDoc>>;
    public createAccount(body: NewAccountDoc, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewJobDoc>>;
    public createAccount(body: NewAccountDoc, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createAccount.');
        }

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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<NewJobDoc>(`${this.basePath}/accounts/`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get information about an account
     * 
     * @param accountId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAccount(accountId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAccount(accountId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAccount(accountId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAccount(accountId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getAccount.');
        }

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

        return this.httpClient.get<any>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List the accounts
     * Get a list of all accounts in the system.
     * @param pageNumber The page number to get
     * @param pageSize The number of items to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listAccounts(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public listAccounts(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public listAccounts(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public listAccounts(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageNumber !== undefined) {
            queryParameters = queryParameters.set('page_number', <any>pageNumber);
        }
        if (pageSize !== undefined) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }

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

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/accounts/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update an account
     * Update an existing account.
     * @param accountId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateAccount(accountId: string, body: UpdateAccountDoc, observe?: 'body', reportProgress?: boolean): Observable<NewJobDoc>;
    public updateAccount(accountId: string, body: UpdateAccountDoc, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewJobDoc>>;
    public updateAccount(accountId: string, body: UpdateAccountDoc, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewJobDoc>>;
    public updateAccount(accountId: string, body: UpdateAccountDoc, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling updateAccount.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateAccount.');
        }

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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.patch<NewJobDoc>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
