import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterService } from '../filter/filter.service';

@Component({
selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../inventory.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;

  arr: any[] = [];
  cardetails: any[];
  constructor() {
    this.initialiseCarDetails();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.currentFilter) {
      const priceRange = changes.currentFilter.currentValue.priceRange;
      const brand = changes.currentFilter.currentValue.brand;

      if (priceRange.length) {
        const minPrice = priceRange[0].range.min;
        const maxPrice = priceRange[priceRange.length - 1].range.max;

        this.initialiseCarDetails();

        this.cardetails = this.cardetails.filter((carDetail) => {
          if (carDetail.price >= minPrice && carDetail.price <= maxPrice) {
            return carDetail;
          }
        }) || [];
      }

      if (brand.length) {
        this.initialiseCarDetails();

        this.arr = [];

        this.cardetails.filter((detail) => {


          brand.filter(element => {
            console.log(detail.title),
            console.log(element.name)
            if(detail.title == element.name) {
              this.arr.push(detail);
            }
          });

          //return detail.title == brand[0].name;

          

           
        })

        console.log('arr', this.arr);

        
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
      year: '2015',
      price: 300000
    },
    {
      title: 'Mitsubishi',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Petrol',
      year: '2011',
      price: 500000
    }];
  }

}