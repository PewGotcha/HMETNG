import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public isLoggedIn;
  constructor(private http: HttpClient) {
    
    this.isLoggedIn = false
  }

loginUser()
{

  this.isLoggedIn = true

}


getUserLoggedIn(){

  return this.isLoggedIn
}
}
