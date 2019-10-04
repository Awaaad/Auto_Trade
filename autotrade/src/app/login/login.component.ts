import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  model: any = {};

  onSubmit() {
    if(document.getElementById("login")){
      alert('You successfully logged in!)\n\n' + JSON.stringify(this.model))
    }
    else
    {
      alert('You successfully logged in!)\n\n' + JSON.stringify(this.model))
    }
  }

}
