import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isDisplayed: boolean = false;
  isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  model: any = {};

  onSubmit() {
    this.isDisplayed = true;
    this.isHidden = false;
    //document.getElementById("logged").innerHTML= "Successfully logged in!";

    // console.log(this.isDisplayed)
  }

  isLogin: boolean = true;
  onClick(){
    this.isLogin = !this.isLogin;
  }
}
