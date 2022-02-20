import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../auth.service';
import {LoggedinGuard} from '../loggedin.guard'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private _auth: AuthService, private _loggedin: LoggedinGuard, private router:Router) { }

  ngOnInit(): void {
  }


  login(value: any){

    if (value.username == 'root' && value.password == 'password'){
      this._auth.loginUser()
      console.log(this._auth.isLoggedIn)
      this.router.navigateByUrl("/adminview")

    }
    else{ console.log('no')
    }
  }

loginUser(e: any){

  var username = e.target.elements[0].value
  var password = e.target.elements[1].value
  console.log()
}


}
