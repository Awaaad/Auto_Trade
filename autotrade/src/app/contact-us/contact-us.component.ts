import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  showMsg = false;
  public name="";
  public email="";
  public message="";
  XDomainRequest: any;
  /* SmtpJS.com - v3.0.0 */
  Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); this.Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = this.Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = this.Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XMLHttpRequest ? (t = new XMLHttpRequest).open(e, n) : t = null, t } };

  loading = false;
  constructor(private formBuilder: FormBuilder, private validatorsService: ValidatorsService, public http: HttpService) 
  { 

  }

  get f() { return this.contactForm.controls; } 

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorsService.namePattern)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    console.log(this.http.test);
    AOS.init();
  }
  

  onSubmit() {
    this.submitted = true;

    this.loading = true;
    
    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;  
    }
    else{
      this.showMsg = true;
    }
    
    setTimeout(()=>{    //<<<---    using ()=> syntax
            this.showMsg= false;
            this.submitted = false;
            document.forms["form"].reset();
    }, 2000); 

    // TRYING TO SEND MAIL
    // let user = {
    //   name: this.name,
    //   email: this.email
    // }

    // this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
    //   data => {
    //     let res:any = data; 
    //     console.log(
    //      'asjdasdjnasdnas'
    //     );
    //   },
    //   err => {
    //     console.log(err);
    //     this.loading = false;
    //   },() => {
    //     this.loading = false;
    //   }
    // );

    
  }

  close(){
    this.submitted = false;
  }
}