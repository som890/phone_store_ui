import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from './_model/phone.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  constructor(private httpClient: HttpClient) { }

  public addPhone(phone: Phone) {
    return this.httpClient.post<Phone>("http://localhost:8080/phone/add", phone);
  }
}
