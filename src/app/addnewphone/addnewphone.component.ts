import { Component, OnInit } from '@angular/core';
import { Phone } from '../_model/phone.model';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { PhoneServiceService } from '../_service/phone-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addnewphone',
  templateUrl: './addnewphone.component.html',
  styleUrls: ['./addnewphone.component.css'],
})
export class AddnewphoneComponent implements OnInit {
  isNewPhone = true;

  constructor(
    private phoneService: PhoneServiceService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.phone = this.activatedRoute.snapshot.data['phone'];
    if(this.phone && this.phone.phoneId) {
        this.isNewPhone = false;
    }
  }
  phone: Phone = {
    phoneId: 0,
    phoneName: '',
    phoneDescription: '',
    phoneDiscountedPrice: 0,
    phoneActualPrice: 0,
    phoneImageSet: [],
  };

  public addPhone(phoneForm: NgForm) {
    const phoneFormData = this.prepareformData(this.phone);

    this.phoneService.addPhone(phoneFormData).subscribe(
      (response: Phone) => {
        console.log(response);
        phoneForm.reset();
        this.phone.phoneImageSet = [];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareformData(phone: Phone): FormData {
    const formData = new FormData();

    formData.append(
      'phone',
      new Blob([JSON.stringify(phone)], { type: 'application/json' })
    );

    for (var i = 0; i < phone.phoneImageSet.length; i++) {
      formData.append(
        'imageFile',
        phone.phoneImageSet[i].file,
        phone.phoneImageSet[i].file.name
      );
    }
    return formData;
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const files = event.target.files[0];

      const fileHandle: FileHandle = {
        file: files,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(files)
        ),
      };
      this.phone.phoneImageSet.push(fileHandle);
    }
  }
  removeImages(i: number) {
    this.phone.phoneImageSet.splice(i, 1);
  }
  fileDroped(fileHandle: FileHandle) {
    this.phone.phoneImageSet.push(fileHandle);
  }
}
