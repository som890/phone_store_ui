import { Component, OnInit } from '@angular/core';
import { Phone } from '../_model/phone.model';
import { NgForm } from '@angular/forms';
import { PhoneServiceService } from '../phone-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addnewphone',
  templateUrl: './addnewphone.component.html',
  styleUrls: ['./addnewphone.component.css']
})
export class AddnewphoneComponent implements OnInit {


  constructor(private phoneService: PhoneServiceService,
      private sanitizer: DomSanitizer
  ) { }
  ngOnInit(): void {
  }
  phone: Phone = {
    phoneName: "",
    phoneDescription: '',
    phoneDiscountedPrice: 0,
    phoneActualPrice: 0,
    phoneImages: []
  }

  public addPhone(phoneForm: NgForm) {
   const phoneFormData =  this.prepareformData(this.phone);

    this.phoneService.addPhone(phoneFormData).subscribe(
      (response: Phone) => {
        console.log(response);
        phoneForm.reset();
        this.phone.phoneImages = [];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  prepareformData(phone: Phone): FormData {
    const formData = new FormData();

    formData.append('phone',
      new Blob([JSON.stringify(phone)], {type: 'application/json'})
  );

      for(var i = 0; i< phone.phoneImages.length;i++) {
        formData.append(
          'imageFile',phone.phoneImages[i].file,
          phone.phoneImages[i].file.name)
      }
      return formData;
    
  }

  onFileSelected(event: any) {
    if(event.target.files) {
      const files = event.target.files[0];

      const fileHandle: FileHandle = {
        file: files,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(files)
        )
      }
      this.phone.phoneImages.push(fileHandle);
    }
  
    }
    removeImages(i: number){
      this.phone.phoneImages.splice(i, 1);
    }
    fileDroped(fileHandle:FileHandle) {
      this.phone.phoneImages.push(fileHandle);
    }

}
