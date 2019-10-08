import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router} from '@angular/router';
import { DetailsService } from './details.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../inventory.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;

  cardetails: any[];
  details: { id: number; title: string; power: string; mileage: string; fuel: string; year: string; price: number; }[];
  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private _detailsService: DetailsService) {
    this.initialiseCarDetails();
  }

  ngOnInit() {
    this.details = this._detailsService.getCarDetails();
  }

  onClick(id: number){
    this._router.navigate(['/details', id]);
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
      id: 1,
      title: 'Suzuki',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2019',
      price: 100000,
      carImage: '../../../assets/Suzuki-Swift/marutisuzuki-swift.jpg'
    },
    {
      id: 2,
      title: 'Mazda',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2019',
      price: 300000
    },
    {
      id: 3,
      title: 'Kia',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2018',
      price: 300500
    },
    {
      id: 4,
      title: 'Nissan',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2016',
      price: 305000
    },
    {
      id: 5,
      title: 'Mitsubishi',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Petrol',
      year: '2017',
      price: 550000
    },
    {
      id: 6,
      title: 'Mitsubishi',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Petrol',
      year: '2018',
      price: 100000
    }];
  }

}