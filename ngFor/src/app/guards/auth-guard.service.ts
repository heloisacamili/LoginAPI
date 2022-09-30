import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router : Router) { }
  CanActive() {
    const token = window.localStorage.getItem('token');

    if (!token || token == '') {
      this.router.navigate(['http://localhost:4019/cadastro']);
      return false;
    }
    return true;
  }
}
