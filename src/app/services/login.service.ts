import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  HTTP_OPTIONS: any;

  constructor(private httpClient: HttpClient) {
  }

  /**
   * @description Get babies catalog
   */
  login(username: string, password: string) {
    this.HTTP_OPTIONS = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        }
      )
    };
    const url = environment.apiKindergaten + '/api/v1/user_token';
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, { auth: { email:username, password:password } },
        this.HTTP_OPTIONS).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

}