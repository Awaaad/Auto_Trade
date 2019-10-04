import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model: any = {};


  onSubmit() {
      alert('You successfully registered!\n\n');
      return("Successfully logged in");
      }
}

document.getElementById("logged").innerHTML = onSubmit();
