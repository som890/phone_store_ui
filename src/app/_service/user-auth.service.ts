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
  public setUsername(username: string) {
    localStorage.setItem('username', username);
  }
  
  public getUsername(): string | null {
    return localStorage.getItem('username');
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
  public isAdmin() {
    const roles: any[] = this.getRoles();
    console.log(roles);
    return roles[0].roleName === 'Admin';
  }
  public isUser() {
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'User';
  }
}