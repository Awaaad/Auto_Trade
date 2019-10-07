import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  filterApplied = {};

  constructor() { }
  ngOnInit() {
  }

  selectedPriceRange(arr): void {
    console.log('selected', arr[0]);
    console.log('selected', arr[1]);
    this.filterApplied = {
      priceRange: arr[0],
      brand: arr[1]
    };
  }

  //   selectedColourChange(selectedColour: string) : void {
  //   this.filterApplied.color = selectedColour;
  // }

}
