import { Component } from '@angular/core';
import { UserAuthService } from '../_service/user-auth.service';
import { UserService } from '../_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
  ) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }
  public isAdmin() {
    return this.userAuthService.isAdmin();
  }
  public isUser() {
    return this.userAuthService.isUser();
  }
  public getUsername(): string {
    return this.getUsername();
  }
}