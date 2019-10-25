import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],

})
export class InventoryComponent implements OnInit {

  filterApplied = {};

  constructor(private router: Router) { }
  ngOnInit() {
    AOS.init();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

  selectedPriceRange(arr): void {
    // console.log('selected', arr[0]);
    // console.log('selected', arr[1]);
    this.filterApplied = {
      priceRange: arr[0],
      brand: arr[1],
      year: arr[2],
      type: arr[3]
    };
  }

  //   selectedColourChange(selectedColour: string) : void {
  //   this.filterApplied.color = selectedColour;
  // }

}
