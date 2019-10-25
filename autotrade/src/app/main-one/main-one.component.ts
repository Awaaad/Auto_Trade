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

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
