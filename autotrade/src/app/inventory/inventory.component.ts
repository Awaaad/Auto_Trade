import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  filterApplied = {}

  constructor() { }
  ngOnInit() {
  }

  selectedPriceRange(arrFromChildFilter): void {
    this.filterApplied = {
      priceRange: arrFromChildFilter
    }
  }

}
