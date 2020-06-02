import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  apiUrl = 'https://api.paparazzme.blazingtrail.in';
  constructor(private httpClient: HttpClient) {

  }

  getAllSubscribers() {
    const url = '/v1/admin/getAll/?loginType=user';
    return this.httpClient.get(this.apiUrl + url);
  }
}
