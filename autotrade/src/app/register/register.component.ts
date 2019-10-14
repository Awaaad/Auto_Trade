import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  model: any = {};

  ngOnInit() {
  }
    onSubmit() {
      this.goToHome();
      this.Store();
    }
    goToHome() {
      this.router.navigate(['/']);
    }
    Store(){
      const firstname = (document.getElementById('firstname') as HTMLInputElement);
      localStorage.setItem('firstname', firstname.value);
      const lastname = (document.getElementById('lastname') as HTMLInputElement);
      localStorage.setItem('lastname', lastname.value);
      const email = (document.getElementById('email') as HTMLInputElement);
      localStorage.setItem('email', email.value);
      const registerPass = (document.getElementById('registerPass') as HTMLInputElement);
      localStorage.setItem('Password', registerPass.value);
      const confirmRegisterPass = (document.getElementById('confirmRegisterPass') as HTMLInputElement);
      localStorage.setItem('Confirm Password', confirmRegisterPass.value);
      }
}


