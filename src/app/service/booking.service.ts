import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl = 'https://api.paparazzme.blazingtrail.in';
  constructor(private httpClient: HttpClient) {

  }

  getAllBooking() {
    const url = '/v1/admin/getAllBooking/';
    return this.httpClient.get(this.apiUrl + url);

  }
}
