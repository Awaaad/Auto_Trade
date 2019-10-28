import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-main-one',
  templateUrl: './main-one.component.html',
  styleUrls: ['./main-one.component.scss']
})
export class MainOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }
  model: any = {};

  submitted = false;
  
  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.submitted = true;
    document.forms["form"].reset();
    setTimeout(()=>{    //<<<---    using ()=> syntax
            this.submitted= false;
    }, 2000); 
  }

  close(){
    this.submitted = false;
  }
}
