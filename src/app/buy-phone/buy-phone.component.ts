import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../_model/phone.model';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../_model/order-details.model';
import { PhoneServiceService } from '../_service/phone-service.service';

@Component({
  selector: 'app-buy-phone',
  templateUrl: './buy-phone.component.html',
  styleUrls: ['./buy-phone.component.css']
})
export class BuyPhoneComponent implements OnInit {

  phoneDetails: Phone[] = [];
  orderDetails: OrderDetails = {
    orderFullName: '',
    orderFullAddress: '',
    orderContactNumber: '',
    orderAlternateContactNumber: '',
    orderPhoneQuantityList: []
  }

  constructor(private activatedRoute: ActivatedRoute, private phoneService: PhoneServiceService) { }

  ngOnInit(): void {
    this.phoneDetails = this.activatedRoute.snapshot.data['phoneDetails']

    if (this.phoneDetails && this.orderDetails) {
      this.phoneDetails.forEach(
          x => this.orderDetails.orderPhoneQuantityList.push(
              { phoneId: x.phoneId, quantity: 1 }
          )
      );
      console.log(this.phoneDetails);
      console.log(this.orderDetails);
  } else {
      console.error('One or both of the variables is undefined.');
  }
}
  

  placeOrder(orderForm: NgForm) {
    this.phoneService.placeOrder(this.orderDetails).subscribe(
      (resp) => {
        console.log(resp);
        orderForm.reset();
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
