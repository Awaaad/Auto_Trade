import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  user={
    name: ''
  }

  ngOnInit() {
    AOS.init();
  }
  model: any = {};

  submitted = false;

  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.submitted = true;
    console.log(this.submitted);
    document.forms["form"].reset();
    setTimeout(()=>{    //<<<---    using ()=> syntax
            this.submitted= false;
    }, 2000); 
    console.log(this.submitted);
  }

  close(){
    this.submitted = false;
    console.log(this.submitted, "close");
  }

}
