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

import { InlineResponse2007 } from '../model/inlineResponse2007';
import { NewJobDoc } from '../model/newJobDoc';
import { NewSpaceDoc } from '../model/newSpaceDoc';
import { PatchSpaceDoc } from '../model/patchSpaceDoc';
import { SpaceDoc } from '../model/spaceDoc';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SpacesService {

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
     * List the spaces
     * Get a list of all spaces associated with the account.
     * @param accountId 
     * @param pageNumber The page number to get
     * @param pageSize The number of items to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spacesCreateSpace(accountId: string, pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2007>;
    public spacesCreateSpace(accountId: string, pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2007>>;
    public spacesCreateSpace(accountId: string, pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2007>>;
    public spacesCreateSpace(accountId: string, pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling spacesCreateSpace.');
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

        return this.httpClient.get<InlineResponse2007>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/spaces/`,
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
     * Create a new space
     * Create a new space with a name.
     * @param accountId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spacesCreateSpace_1(accountId: string, body: NewSpaceDoc, observe?: 'body', reportProgress?: boolean): Observable<NewJobDoc>;
    public spacesCreateSpace_1(accountId: string, body: NewSpaceDoc, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewJobDoc>>;
    public spacesCreateSpace_1(accountId: string, body: NewSpaceDoc, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewJobDoc>>;
    public spacesCreateSpace_1(accountId: string, body: NewSpaceDoc, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling spacesCreateSpace_1.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling spacesCreateSpace_1.');
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

        return this.httpClient.post<NewJobDoc>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/spaces/`,
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
     * Get information about a space
     * Get information about a specific space.
     * @param accountId 
     * @param spaceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spacesUpdateSpace(accountId: string, spaceId: string, observe?: 'body', reportProgress?: boolean): Observable<SpaceDoc>;
    public spacesUpdateSpace(accountId: string, spaceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SpaceDoc>>;
    public spacesUpdateSpace(accountId: string, spaceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SpaceDoc>>;
    public spacesUpdateSpace(accountId: string, spaceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling spacesUpdateSpace.');
        }
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling spacesUpdateSpace.');
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

        return this.httpClient.get<SpaceDoc>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/spaces/${encodeURIComponent(String(spaceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Check if a space exists
     * Check if a space exists.
     * @param accountId 
     * @param spaceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spacesUpdateSpace_2(accountId: string, spaceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public spacesUpdateSpace_2(accountId: string, spaceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public spacesUpdateSpace_2(accountId: string, spaceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public spacesUpdateSpace_2(accountId: string, spaceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling spacesUpdateSpace_2.');
        }
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling spacesUpdateSpace_2.');
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

        return this.httpClient.head<any>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/spaces/${encodeURIComponent(String(spaceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a space
     * Remove a space entirely.
     * @param accountId 
     * @param spaceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spacesUpdateSpace_3(accountId: string, spaceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public spacesUpdateSpace_3(accountId: string, spaceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public spacesUpdateSpace_3(accountId: string, spaceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public spacesUpdateSpace_3(accountId: string, spaceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling spacesUpdateSpace_3.');
        }
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling spacesUpdateSpace_3.');
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

        return this.httpClient.delete<any>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/spaces/${encodeURIComponent(String(spaceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a space
     * Update attributes concerning a space.
     * @param accountId 
     * @param spaceId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public spacesUpdateSpace_4(accountId: string, spaceId: string, body: PatchSpaceDoc, observe?: 'body', reportProgress?: boolean): Observable<SpaceDoc>;
    public spacesUpdateSpace_4(accountId: string, spaceId: string, body: PatchSpaceDoc, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SpaceDoc>>;
    public spacesUpdateSpace_4(accountId: string, spaceId: string, body: PatchSpaceDoc, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SpaceDoc>>;
    public spacesUpdateSpace_4(accountId: string, spaceId: string, body: PatchSpaceDoc, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling spacesUpdateSpace_4.');
        }
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling spacesUpdateSpace_4.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling spacesUpdateSpace_4.');
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

        return this.httpClient.patch<SpaceDoc>(`${this.basePath}/accounts/${encodeURIComponent(String(accountId))}/spaces/${encodeURIComponent(String(spaceId))}`,
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
