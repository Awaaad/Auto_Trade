import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MustMatch } from '../../_helpers/must-match.validator';
import { UserService, AuthenticationService } from '../_services';
import * as AOS from 'aos';
import { ValidatorsService} from '../services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  returnUrl: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private validatorsService: ValidatorsService)  {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', [Validators.required, Validators.pattern(this.validatorsService.namePattern)]],
          username: ['', [Validators.required, Validators.pattern(this.validatorsService.usernamePattern)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.validatorsService.passwordPattern)]],
          confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
    });
    AOS.init();


  }

  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
              data => {
                this.router.navigate(['/']);
              },
              error => {
                this.error = error;
                this.loading = false;
              });
          });
  }

}


