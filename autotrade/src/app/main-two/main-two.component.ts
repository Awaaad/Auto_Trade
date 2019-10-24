import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-main-two',
  templateUrl: './main-two.component.html',
  styleUrls: ['./main-two.component.scss']
})
export class MainTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
