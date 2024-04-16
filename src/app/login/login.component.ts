import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { UserAuthService } from '../_service/user-auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSerive: UserService,
    private userAuthServie: UserAuthService,
    private router: Router) { }

  ngOnInit(): void { }

  login(loginForm: NgForm) {
    this.userSerive.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthServie.setRoles(response.user.roles);
        this.userAuthServie.setToken(response.token);

        const role = response.user.roles[0].roleName;
        if (role == 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    )

  }
}