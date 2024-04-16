import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): []{
    const rolesData = localStorage.getItem('roles');
    if (rolesData) {
      return JSON.parse(rolesData);
    }
    return []; 
   
  }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken(): string | any {
    return localStorage.getItem('token');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}