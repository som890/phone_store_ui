import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../_model/phone.model';

@Component({
  selector: 'app-phone-view-details',
  templateUrl: './phone-view-details.component.html',
  styleUrls: ['./phone-view-details.component.css'],
})
export class PhoneViewDetailsComponent implements OnInit {
  phone: Phone | undefined;
  selectedPhoneIndex = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.phone = this.activatedRoute.snapshot.data['phone'];
    console.log(this.phone);
  }
  changeIndex(index: number) {
    this.selectedPhoneIndex = index;
  }
  
  buyPhone(phoneId: any) {
    this.router.navigate(['/buyPhone', {
      isSinglePhoneCheckOut: true, id: phoneId 
    }]);
  }
}
