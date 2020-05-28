import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotographerService {
  apiUrl = 'https://api.paparazzme.blazingtrail.in';
  constructor(private httpClient: HttpClient) {

  }

  public getAllPhotoGraphers() {
    const url = '/v1/admin/getAll/?loginType=photographer';
    return this.httpClient.get(this.apiUrl + url);
  }
  public addPhotoGraphers(payload) {
    return this.httpClient.post(this.apiUrl + '/photographers', payload);
  }
}
