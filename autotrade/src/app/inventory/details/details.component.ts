import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../inventory.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;

  cardetails: any[];
  constructor() {
    this.initialiseCarDetails();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.warn(changes)
    if (changes.currentFilter) {
      const priceRange = changes.currentFilter.currentValue.priceRange;
      const brand = changes.currentFilter.currentValue.brand;
      const year = changes.currentFilter.currentValue.year;

      this.initialiseCarDetails();

      // FOR PRICE RANGE
      if (priceRange.length) {
        const minPrice = priceRange[0].range.min;
        const maxPrice = priceRange[priceRange.length - 1].range.max;

        this.cardetails = this.cardetails.filter((carDetail) => {
          if (carDetail.price >= minPrice && carDetail.price <= maxPrice) {
            return carDetail;
          }
        }) || [];

      }

      // FOR YEAR
      if (year.length) {

        const arrayYears = year.map((yearObj) => {
          // tslint:disable-next-line: radix
          return (yearObj.value);

        });

        console.log('arrayYears', arrayYears);

        this.cardetails = this.cardetails.filter((detail) => {
          if (arrayYears.includes(detail.year)) {
            return detail;
          }
        });

      }

      // FOR BRAND
      if (brand.length) {
        const arrBrandNames = brand.map((brandDetail) => {
          return brandDetail.name.toLowerCase();
        });

        this.cardetails = this.cardetails.filter((detail) => {
          if (arrBrandNames.includes(detail.title.toLowerCase())) {
            return detail;
          }
        });
      }

    }
  }

  private initialiseCarDetails(): void {
    this.cardetails = [{
      title: 'Suzuki',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2019',
      price: 100000
    },
    {
      title: 'Mazda',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2019',
      price: 300000
    },
    {
      title: 'Kia',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2018',
      price: 300500
    },
    {
      title: 'Nissan',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2016',
      price: 305000
    },
    {
      title: 'Mitsubishi',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Petrol',
      year: '2017',
      price: 550000
    },
    {
      title: 'Mitsubishi',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Petrol',
      year: '2018',
      price: 100000
    }];
  }

}