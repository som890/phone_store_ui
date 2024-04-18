import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../_model/file-handle.model';
import { Phone } from '../_model/phone.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesProcessingService {
  constructor(private sanitizer: DomSanitizer) {}


  // This create images function will take one parameter (product type) and process all the images
  // which recives from product
  public createImages(phone: any) {
    const phoneImages: any[] = phone.phoneImageSet;

    console.log("Phone: " + phone);
    console.log("Images " + phoneImages);

    if (!phoneImages || !Array.isArray(phone.phoneImageSet)) {
      console.log('phone.phoneImages is not exist or not a array');
      return phone;
    }

    const phoneImagesToFileHandle: FileHandle[] = [];

    for (let i = 0; i < phoneImages.length; i++) {
      const imageFileData = phoneImages[i];

      const imageBlob = this.dataURItoBlob(
        imageFileData.picByte,
        imageFileData.type
      );
      const imageFile = new File([imageBlob], imageFileData.Name, {
        type: imageFileData.type,
      });

      const finalFileHandle: FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(imageFile)
        ),
      };
      phoneImagesToFileHandle.push(finalFileHandle);
    }
    phone.phoneImageSet = phoneImagesToFileHandle;
    return phone;
  }

  // will take the picture bytes and then it will create to blob
  public dataURItoBlob(picBytes: string, imageType: any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: imageType });
    return blob;
  }
}
