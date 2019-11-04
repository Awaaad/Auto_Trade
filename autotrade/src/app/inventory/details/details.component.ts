import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DetailsService } from './details.service';
import { TouchSequence } from 'selenium-webdriver';
import * as AOS from 'aos';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../inventory.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;
  public numberOfItems: string;
  cardetails: any[];
  // details: { id: number; brand: string; engine: string; mileage: string; fuel: string; year: string; price: number; }[];
  details: {}[];
  actualPage: number = 1;
  searchTerm: string;
  search="";

  order: string = 'brand';
  reverse: boolean = false;
  sortedCollection: any[];

  constructor(private _router: Router, private _detailsService: DetailsService, private orderPipe: OrderPipe) {
    this.initialiseCarDetails();
    this.sortedCollection = orderPipe.transform(this.cardetails, 'brand');
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


    document.getElementById("searchCars")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("search").click();
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

  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
  
  onAdd() {
    this.numberOfItems = (<HTMLInputElement>document.getElementById('numberOfItems')).value;
    this.scrollTop();
  }

  onSearch(){
    this.search = this.searchTerm;
  }

  onClick(id: number) {
    this._router.navigate(['/car-details', id]);
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
    this.cardetails = this._detailsService.getCarDetails();
  }
}

