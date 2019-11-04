import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
@Component({
  selector: 'app-main-one',
  templateUrl: './main-one.component.html',
  styleUrls: ['./main-one.component.scss']
})
export class MainOneComponent implements OnInit {
  newsLetterForm: FormGroup;
  submitted = false;
  showMsg = false;
  public email="";

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.newsLetterForm.controls; } 

  ngOnInit() {
    this.newsLetterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    AOS.init();
  }
  model: any = {};
  
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.newsLetterForm.invalid) {
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
}
