import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  showMsg = false;
  namePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"; 

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.contactForm.controls; } 

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    AOS.init();
  }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;  
        console.log(this.submitted);
    }
    else{
      this.showMsg = true;
    }
    document.forms["form"].reset();
    setTimeout(()=>{    //<<<---    using ()=> syntax
            this.showMsg= false;
            this.submitted = false;
    }, 2000); 
    // console.log(this.submitted);
  }

  close(){
    this.submitted = false;
    console.log(this.submitted);
  }

 

}
