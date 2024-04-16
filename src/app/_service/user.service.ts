import { Injectable, booleanAttribute } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData: any) {
    return this.httpclient.post(this.API + '/authenticate', loginData, { headers: this.requestHeader });
  }

  public forUser() {
    return this.httpclient.get(this.API + '/forUser', {
      responseType: 'text'
    });
  }

  public forAdmin() {
    return this.httpclient.get(this.API + '/forAdmin', {
      responseType: 'text'
    });
  }

  public roleMatch(allowedRoles: string[]): boolean {
    const userRoles: any[] = this.userAuthService.getRoles();

    if (userRoles != null && userRoles.length > 0) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            return true; // If there's a match, return true
          }
        }
      }
    }

    // If no match is found after checking all combinations, return false
    return false;
  }

}