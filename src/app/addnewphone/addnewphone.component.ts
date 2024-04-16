import { Component, OnInit } from '@angular/core';
import { Phone } from '../_model/phone.model';
import { NgForm } from '@angular/forms';
import { PhoneServiceService } from '../phone-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addnewphone',
  templateUrl: './addnewphone.component.html',
  styleUrls: ['./addnewphone.component.css']
})
export class AddnewphoneComponent implements OnInit {

  constructor(private phoneService: PhoneServiceService) {}
  ngOnInit(): void {
  }
  phone: Phone = {
    phoneName: "",
    phoneDescription: '',
    phoneDiscountedPrice: 0,
    phoneActualPrice: 0
  }
  public addPhone(phoneForm: NgForm) {
    this.phoneService.addPhone(this.phone).subscribe(
      (response:  Phone) => {
        console.log(response);
        phoneForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

}
