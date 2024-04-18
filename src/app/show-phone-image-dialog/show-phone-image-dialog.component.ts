import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-phone-image-dialog',
  templateUrl: './show-phone-image-dialog.component.html',
  styleUrls: ['./show-phone-image-dialog.component.css']
})
export class ShowPhoneImageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    this.recieveImages();
  }
  public recieveImages() {
    console.log(this.data);
  }

}
