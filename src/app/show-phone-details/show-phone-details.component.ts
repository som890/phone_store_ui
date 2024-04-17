import { Component, OnInit } from '@angular/core';
import { PhoneServiceService } from '../phone-service.service';
import { Phone } from '../_model/phone.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowPhoneImageDialogComponent } from '../show-phone-image-dialog/show-phone-image-dialog.component';

@Component({
  selector: 'app-show-phone-details',
  templateUrl: './show-phone-details.component.html',
  styleUrls: ['./show-phone-details.component.css']
})
export class ShowPhoneDetailsComponent implements OnInit{
  constructor(private phoneService: PhoneServiceService,
      private matdialog: MatDialog
  ) {}

  phoneDetails: Phone[] = [];
  displayedColumns: string[] = ['Phone Id', 'Phone name', 'Phone description', 'Phone discounted price', 'Phone actual price','Image','Edit','Delete'];

  ngOnInit(): void {
    this.getAllPhons();
  }

  public getAllPhons() {
    this.phoneService.getAllPhones().subscribe(
      (resp: Phone[]) => {
        console.log(resp);
        this.phoneDetails = resp;
      }, 
      (error: HttpErrorResponse) => {
        console.log(error);
      }
      
    )
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
    this.matdialog.open(ShowPhoneImageDialogComponent, {
      height: '400px',
      width: '680px'
    })
  }


}
