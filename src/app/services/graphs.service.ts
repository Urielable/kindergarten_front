import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {
  HTTP_OPTIONS: any;

  constructor(private httpClient: HttpClient) { }

  /**
   * @description Get activity logs
   */
  getActivityDurations() {
    this.HTTP_OPTIONS = {
      headers: new HttpHeaders(
        {
          'Authorization': 'Bearer ' + localStorage.getItem('secret_auth_miss_line'),
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        }
      )
    };

    const url = environment.apiKindergaten + '/api/v1/graphs/activity_durations';
    return this.httpClient.get(url, this.HTTP_OPTIONS );
  }

  getBabyActivities(baby_id?: any) {
    this.HTTP_OPTIONS = {
      headers: new HttpHeaders(
        {
          'Authorization': 'Bearer ' + localStorage.getItem('secret_auth_miss_line'),
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        }),
        params: { baby_id: baby_id }
    };

    const url = environment.apiKindergaten + '/api/v1/graphs/baby_activities';
    return this.httpClient.get(url, this.HTTP_OPTIONS );
  }
}