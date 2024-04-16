import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private userService: UserService) {}

  message: any;

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userService.forUser().subscribe(
      (data) => {
        console.log(data);
        this.message = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }




}
