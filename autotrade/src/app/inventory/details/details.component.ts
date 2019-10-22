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
  details: { id: number; brand: string; engine: string; mileage: string; fuel: string; year: string; price: number; }[];
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
    console.warn(changes);
    if (changes.currentFilter) {
      const priceRange = changes.currentFilter.currentValue.priceRange;
      const brand = changes.currentFilter.currentValue.brand;
      const year = changes.currentFilter.currentValue.year;
      const type = changes.currentFilter.currentValue.type;

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

        // console.log('arrayYears', arrayYears);

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
          if (arrBrandNames.includes(detail.brand.toLowerCase())) {
            return detail;
          }
        });
      }

      // FOR TYPE
      if (type.length) {
        const arrTypeNames = type.map((typeDetail) => {
          return typeDetail.name.toLowerCase();
        });

        this.cardetails = this.cardetails.filter((detail) => {
          if (arrTypeNames.includes(detail.type.toLowerCase())) {
            return detail;
          }
        });
      }

    }
  }

  private initialiseCarDetails(): void {
    this.cardetails = [{
      id: 1,
      brand: 'Suzuki',
      model: 'Swift',
      engine: '1248',
      mileage: '28.40 km/liter',
      fuel: 'Diesel',
      year: '2019',
      price: 450000,
      transmission: 'Automatic',
      type: 'Hatchback',
      carImage: '../../../assets/Suzuki-Swift/Main.jpg',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Amaze',
      engine: '1199 cc',
      mileage: '19.00 kmpl',
      fuel: 'Diesel',
      year: '2019',
      price: 400000,
      transmission: 'Automatic',
      type: 'Sedan',
      carImage: '../../../assets/Honda Amaze/Main.jpg',
    },
    {
      id: 3,
      brand: 'Kia',
      model: 'Seltos',
      engine: '1497 cc',
      mileage: '16.80 km/liter',
      fuel: 'Diesel',
      year: '2018',
      price: 2200000,
      transmission: 'Manual',
      type: 'SUV',
      carImage: '../../../assets/Kia Seltos/Main.jpg'
    },
    {
      id: 4,
      brand: 'Nissan',
      model: 'Sunny',
      engine: '1498 cc',
      mileage: '16.95 km/liter',
      fuel: 'Petrol',
      year: '2016',
      price: 550000,
      transmission: 'Manual',
      type: 'Sedan',
      carImage: '../../../assets/Nissan Sunny/Main.jfif'
    },
    {
      id: 5,
      brand: 'Mitsubishi',
      model: 'Pajero',
      engine: '2477 cc',
      mileage: '10.77 km/liter',
      fuel: 'Petrol',
      year: '2017',
      price: 1550000,
      transmission: 'Manual',
      type: 'SUV',
      carImage: '../../../assets/Mitsubishi Pajero/Main.jfif'
    },
    {
      id: 6,
      brand: 'Mitsubishi',
      model: 'Outlander',
      engine: '2360 cc',
      mileage: '9.62 km/liter',
      fuel: 'Diesel',
      year: '2018',
      price: 1000000,
      transmission: 'Automatic',
      type: 'SUV',
      carImage: '../../../assets/Mitsubishi Outlander/Mitsubishi Outlander.jpg'
    },
    {
      id: 7,
      brand: 'Mercedes',
      model: 'Benz C-Class Cabriolet',
      engine: '1991 cc',
      mileage: '9.62 km/liter',
      fuel: 'Petrol',
      year: '2016',
      price: 1500000,
      transmission: 'Automatic',
      type: 'Convertible',
      carImage: '../../../assets/MercedesBenz-C/Main.jpg'
    },
    {
      id: 8,
      brand: 'Ford',
      model: 'Mustang',
      engine: '2360 cc',
      mileage: '13.00 km/liter',
      fuel: 'Diesel',
      year: '2018',
      price: 10000000,
      transmission: 'Automatic',
      type: 'Sport',
      carImage: '../../../assets/Ford Mustang/Main.jpg'
    },
    {
      id: 9,
      brand: 'Mercedes',
      model: 'Benz E-Class',
      engine: '3982 cc',
      mileage: '18.00 km/liter',
      fuel: 'Petrol',
      year: '2019',
      price: 1800000,
      transmission: 'Automatic',
      type: 'Coupe',
      carImage: '../../../assets/Mercedes Benz/Main.jpg'
    },
    {
      id: 10,
      brand: 'Hyundai',
      model: 'I20',
      engine: '1396 cc',
      mileage: '22.54 km/liter',
      fuel: 'Petrol',
      year: '2018',
      price: 1000000,
      transmission: 'Automatic',
      type: 'Hatchback',
      carImage: '../../../assets/Hyndai i20/Main.jpg'
    }
  ];
  }

}