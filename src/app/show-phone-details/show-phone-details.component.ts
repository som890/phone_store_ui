import { Component, OnInit } from '@angular/core';
import { Phone } from '../_model/phone.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowPhoneImageDialogComponent } from '../show-phone-image-dialog/show-phone-image-dialog.component';
import { PhoneServiceService } from '../_service/phone-service.service';
import { ImagesProcessingService } from '../_service/images-processing.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-phone-details',
  templateUrl: './show-phone-details.component.html',
  styleUrls: ['./show-phone-details.component.css'],
})
export class ShowPhoneDetailsComponent implements OnInit {
  constructor(
    private phoneService: PhoneServiceService,
    public imageDialog: MatDialog,
    private imageProcessingService: ImagesProcessingService,
    private router: Router,
  ) {}

  phoneDetails: Phone[] = [];
  displayedColumns: string[] = [
    'Phone Id',
    'Phone name',
    'description',
    'Phone discounted price',
    'Phone actual price',
    'Actions',
  ];

  ngOnInit(): void {
    this.getAllPhons();
  }

  public getAllPhons() {
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
  editPhoneDetails(phoneId: Phone) {
    this.router.navigate(['/addNewPhone', {phoneId: phoneId}])
  }
  deletePhone(phoneId: any) {
    this.phoneService.deletePhone(phoneId).subscribe(
      (response) => {
        console.log(response);
        this.getAllPhons();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  showImageDialog(phone: Phone) {
    console.log(phone);
    this.imageDialog.open(ShowPhoneImageDialogComponent, {
      data: {
        images: phone.phoneImageSet,
      },
      height: '400px',
      width: '760px',
    });
  }
}
