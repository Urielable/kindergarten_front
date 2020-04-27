import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CatalogsService {
    HTTP_OPTIONS: any;

    constructor(private httpClient: HttpClient) { }

    /**
     * @description Get babies catalog
     */
    getBabiesCatalog() {
        this.HTTP_OPTIONS = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                }
            )
        };
        const url = environment.apiKindergaten + '/api/v1/catalogs/babies';
        return new Promise((resolve, reject) => {
            this.httpClient.get(url, this.HTTP_OPTIONS).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    /**
     * @description Get babies catalog
     */
    getAssistantsCatalog() {
        this.HTTP_OPTIONS = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                }
            )
        };
        const url = environment.apiKindergaten + '/api/v1/catalogs/assistants';
        return new Promise((resolve, reject) => {
            this.httpClient.get(url, this.HTTP_OPTIONS).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    /**
     * @description Get babies catalog
     */
    getStatusCatalog() {
        this.HTTP_OPTIONS = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                }
            )
        };
        const url = environment.apiKindergaten + '/api/v1/catalogs/activity_status';
        return new Promise((resolve, reject) => {
            this.httpClient.get(url, this.HTTP_OPTIONS).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
}