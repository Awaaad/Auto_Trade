import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDisplayed: boolean = false;
  isHidden: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {}
  ngOnInit() {}

  model: any = {};
// var Users = [
//   {
//     username : "Awad"
//     password: "Awad"
//   }
// ]


 

  onSubmit() {
    this.isDisplayed = true;
    this.isHidden = false;
    //   setTimeout(() => {
    //     this.router.navigate(['/']);
    // }, 3000);

    this.goToHome();
    this.Store();
  
    // this.router.navigate(['/']);
    //document.getElementById("logged").innerHTML= "Successfully logged in!";
    // console.log(this.isDisplayed)
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  Store(){
    const username = (document.getElementById('loginUsername') as HTMLInputElement);
    localStorage.setItem('username', username.value);
    const password = (document.getElementById('loginPass') as HTMLInputElement);
    localStorage.setItem('password', password.value);
   }

//   login(){
//   var username = document.getElementById("loginUsername").value
//   var password = document.getElementById("loginPass").value

//   for(i=0; i<objUsers.length; i++){
//     if(username == Users[i].username && password == Users[i].password){
//       this.router.navigate(['/']);
//     }
//     else{
//       alert("wrong username and password");
//     }
//   }
// }
  isLogin: boolean = true;
  onClick() {
    this.isLogin = !this.isLogin;
  }
}

