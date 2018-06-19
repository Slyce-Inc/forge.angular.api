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

import { APIKeyDoc } from '../model/aPIKeyDoc';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { NewAPIKeyDoc } from '../model/newAPIKeyDoc';
import { NewJobDoc } from '../model/newJobDoc';
import { PatchAPIKeyDoc } from '../model/patchAPIKeyDoc';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class APIKeysService {

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
     * Check if an API key exists
     * Check if an API key exists.
     * @param accountId 
     * @param apiKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checkIfApiKeyExists(accountId: string, apiKey: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public checkIfApiKeyExists(accountId: string, apiKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public checkIfApiKeyExists(accountId: string, apiKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public checkIfApiKeyExists(accountId: string, apiKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling checkIfApiKeyExists.');
        }
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling checkIfApiKeyExists.');
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

        return this.httpClient.head<any>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/api-keys/${encodeURIComponent(String(apiKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a new API key
     * Create a new API key with a name and access control options.
     * @param accountId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createApiKey(accountId: string, body: NewAPIKeyDoc, observe?: 'body', reportProgress?: boolean): Observable<NewJobDoc>;
    public createApiKey(accountId: string, body: NewAPIKeyDoc, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewJobDoc>>;
    public createApiKey(accountId: string, body: NewAPIKeyDoc, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewJobDoc>>;
    public createApiKey(accountId: string, body: NewAPIKeyDoc, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling createApiKey.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createApiKey.');
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

        return this.httpClient.post<NewJobDoc>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/api-keys/`,
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
     * Delete an API key
     * Remove an api key entirely, revoking it.
     * @param accountId 
     * @param apiKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteApiKey(accountId: string, apiKey: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteApiKey(accountId: string, apiKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteApiKey(accountId: string, apiKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteApiKey(accountId: string, apiKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling deleteApiKey.');
        }
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling deleteApiKey.');
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

        return this.httpClient.delete<any>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/api-keys/${encodeURIComponent(String(apiKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get information about an API key
     * Get name and permissions associated with an API key.
     * @param accountId 
     * @param apiKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApiKeyById(accountId: string, apiKey: string, observe?: 'body', reportProgress?: boolean): Observable<APIKeyDoc>;
    public getApiKeyById(accountId: string, apiKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<APIKeyDoc>>;
    public getApiKeyById(accountId: string, apiKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<APIKeyDoc>>;
    public getApiKeyById(accountId: string, apiKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getApiKeyById.');
        }
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling getApiKeyById.');
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

        return this.httpClient.get<APIKeyDoc>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/api-keys/${encodeURIComponent(String(apiKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List the API keys
     * Get a list of all API keys associated with the account.
     * @param accountId 
     * @param pageNumber The page number to get
     * @param pageSize The number of items to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listApiKeys(accountId: string, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    public listApiKeys(accountId: string, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    public listApiKeys(accountId: string, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    public listApiKeys(accountId: string, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling listApiKeys.');
        }

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

        return this.httpClient.get<InlineResponse2001>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/api-keys/`,
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
     * Update an api key
     * Update the name and permissions of an API key.
     * @param accountId 
     * @param apiKey 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateApiKey(accountId: string, apiKey: string, body: PatchAPIKeyDoc, observe?: 'body', reportProgress?: boolean): Observable<APIKeyDoc>;
    public updateApiKey(accountId: string, apiKey: string, body: PatchAPIKeyDoc, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<APIKeyDoc>>;
    public updateApiKey(accountId: string, apiKey: string, body: PatchAPIKeyDoc, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<APIKeyDoc>>;
    public updateApiKey(accountId: string, apiKey: string, body: PatchAPIKeyDoc, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling updateApiKey.');
        }
        if (apiKey === null || apiKey === undefined) {
            throw new Error('Required parameter apiKey was null or undefined when calling updateApiKey.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateApiKey.');
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

        return this.httpClient.patch<APIKeyDoc>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/api-keys/${encodeURIComponent(String(apiKey))}`,
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
