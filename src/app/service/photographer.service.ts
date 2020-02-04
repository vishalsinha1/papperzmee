import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotographerService {
  apiUrl = 'http://api.paparazzme.blazingtrail.in';
  constructor(private httpClient: HttpClient) {

  }

  public getAllPhotoGraphers() {
    return this.httpClient.get(this.apiUrl + '/photographers');
  }
  public addPhotoGraphers(payload) {
    return this.httpClient.post(this.apiUrl+'/photographers',payload);
  }
}
