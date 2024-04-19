import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from '../_model/phone.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  constructor(private httpClient: HttpClient) { }

  public addPhone(phone: FormData) {
    return this.httpClient.post<Phone>("http://localhost:8080/phone/add", phone);
  }
  public getAllPhones() {
    return this.httpClient.get<Phone[]>("http://localhost:8080/phone/get");
  }
  public deletePhone(phoneId: number) {
    return this.httpClient.delete("http://localhost:8080/phone/delete/" + phoneId);
  }
  public getPhoneDetailsById(phoneId: number) {
    return this.httpClient.get("http://localhost:8080/getPhoneDetailsById/" + phoneId);
  }
  public getPhoneDetails(isSinglePhoneCheckout: any, phoneId: any) {
    return this.httpClient.get("http://localhost:8080/"+ isSinglePhoneCheckout + "/" + phoneId)
  }
}
