import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DetailsService } from './details.service';
import { TouchSequence } from 'selenium-webdriver';
import * as AOS from 'aos';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../inventory.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;
  public numberOfItems: string;
  cardetails: any[];
  details: { id: number; brand: string; engine: string; mileage: string; fuel: string; year: string; price: number; }[];
  actualPage: number = 1;
  constructor(private _router: Router, private _detailsService: DetailsService) {
    this.initialiseCarDetails();
  }

  ngOnInit() {
    AOS.init();
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
    
    this.numberOfItems = "4";
    this.details = this._detailsService.getCarDetails();
    
    document.getElementById("numberOfItems")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("add").click();
      }
    });
  }

  scrollTop(){
    window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
    });
  }
  
  onAdd() {
    this.numberOfItems = (<HTMLInputElement>document.getElementById('numberOfItems')).value;
    console.log(this.numberOfItems);
  }

  onClick(id: number) {
    this._router.navigate(['/details', id]);
  }


  ngOnChanges(changes: SimpleChanges) {
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
            this.scrollTop();
            return carDetail;
          }
        }) || [];

      }

      // FOR YEAR
      if (year.length) {

        const arrayYears = year.map((yearObj) => {
          return (yearObj.value);
        });

        // console.log('arrayYears', arrayYears);

        this.cardetails = this.cardetails.filter((detail) => {
          if (arrayYears.includes(detail.year)) {
            this.scrollTop();
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
            this.scrollTop();
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
            this.scrollTop();
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
      id: 3,
      brand: 'BMW',
      model: '5 Series',
      engine: '1995 cc',
      mileage: '18.12 km/liter',
      fuel: 'Petrol',
      year: '2019',
      price: 2000000,
      transmission: 'Automatic',
      type: 'Sedan',
      carImage: '../../../assets/BMW/Main.jpg',
    },
    {
      id: 4,
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
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
    }
    ];
  }
}
