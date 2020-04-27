import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  HTTP_OPTIONS: any;

  constructor(private httpClient: HttpClient) { }

  /**
   * @description Get activity logs
   */
  getActivityLogs(baby_id?: any, assistant_id?: any, status?: any) {
    this.HTTP_OPTIONS = {
      headers: new HttpHeaders(
        {
          'Authorization': 'Bearer ' + localStorage.getItem('secret_auth_miss_line'),
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        }
      ),
      params: { baby_id: baby_id, assistant_id: assistant_id, status: status },
    };

    const url = environment.apiKindergaten + '/api/v1/admin/activity_logs';
    return new Promise((resolve, reject) => {
      this.httpClient.get(url, this.HTTP_OPTIONS ).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }
}