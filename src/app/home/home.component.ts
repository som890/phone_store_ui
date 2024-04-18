import { Component, OnInit } from '@angular/core';
import { PhoneServiceService } from '../_service/phone-service.service';
import { Phone } from '../_model/phone.model';
import { ImagesProcessingService } from '../_service/images-processing.service';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  phoneDetails: Phone[] = [];

  constructor(
    private phoneService: PhoneServiceService,
    private imageProcessingService: ImagesProcessingService
  ) {}
  ngOnInit(): void {
    this,this.getAllphones();
  }
  public getAllphones() {
    this.phoneService
      .getAllPhones()
      .pipe(
        map((x: Phone[], i) =>
          x.map((phone: Phone) =>
            this.imageProcessingService.createImages(phone)
          )
        )
      )
      .subscribe(
        (resp: Phone[]) => {
          console.log(resp);
          this.phoneDetails = resp;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
}
