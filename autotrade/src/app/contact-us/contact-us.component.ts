import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';

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

  constructor(private formBuilder: FormBuilder, private validatorsService: ValidatorsService) { }

  get f() { return this.contactForm.controls; } 

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorsService.namePattern)]],
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
    }
    else{
      this.showMsg = true;
    }
    
    setTimeout(()=>{    //<<<---    using ()=> syntax
            this.showMsg= false;
            this.submitted = false;
            document.forms["form"].reset();
    }, 2000); 
  }

  close(){
    this.submitted = false;
  }

  // write(email){
  //   console.log(email);
  // }
}
