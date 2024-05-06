import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from '../_model/phone.model';
import { OrderDetails } from '../_model/order-details.model';


@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {
    API = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public addPhone(phone: FormData) {
    return this.httpClient.post<Phone>(this.API+ "phone/add", phone);
  }
  public getAllPhones() {
    return this.httpClient.get<Phone[]>(this.API+ "phone/get");
  }
  public deletePhone(phoneId: number) {
    return this.httpClient.delete(this.API+ "delete/" + phoneId);
  }
  public getPhoneDetailsById(phoneId: number) {
    return this.httpClient.get(this.API+ "getPhoneDetailsById/" + phoneId);
  }
  public getPhoneDetails(isSinglePhoneCheckOut: any, phoneId: any) {
    return this.httpClient.get<Phone[]>(this.API+ "getPhoneDetails/"+ isSinglePhoneCheckOut + "/" + phoneId)
  }
  public placeOrder(orderDetails: OrderDetails) {
    return this.httpClient.post(this.API+ "placeOrder",orderDetails);
  }
}
