import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss', '../inventory.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  @Output() filterEmitter = new EventEmitter();

  private routeSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  public priceOptions = [
    { name: 'Rs100 000 - Rs300 000', value: 'Rs100 000 - Rs300 000', range: { min: 100001, max: 300000 }, checked: false },
    { name: 'Rs300 000 - Rs500 000', value: 'Rs300 000 - Rs500 000', range: { min: 300001, max: 500000 }, checked: false },
    { name: 'Rs500 000 - Rs700 000', value: 'Rs500 000 - Rs700 000', range: { min: 500001, max: 700000 }, checked: false },
    { name: 'Rs700 000 - Rs900 000', value: 'Rs700 000 - Rs900 000', range: { min: 700001, max: 900000 }, checked: false },
    { name: 'Rs900 000 - Rs1100 000', value: 'Rs900 000 - Rs1100 000', range: { min: 900001, max: 1100000 }, checked: false },
    { name: 'Rs1100 000 - Rs1400 000', value: 'Rs1100 000 - Rs1400 000', range: { min: 1100001, max: 1400000 }, checked: false }
  ];

  public brandOptions = [
    { name: 'Suzuki', value: 'Suzuki', checked: false },
    { name: 'Mitsubishi', value: 'Mitsubishi', checked: false },
    { name: 'Kia', value: 'Kia', checked: false },
    { name: 'Nissan', value: 'Nissan', checked: false },
    { name: 'Mazda', value: 'Mazda', checked: false },
    { name: 'Mercedes', value: 'Mercedes', checked: false },
    { name: 'BMW', value: 'BMW', checked: false },
    { name: 'Honda', value: 'Honda', checked: false },
    { name: 'Ford', value: 'Ford', checked: false },
    { name: 'Hyundai', value: 'Hyundai', checked: false }
  ];

  public yearOptions = [
    { name: '2019', value: '2019', checked: false },
    { name: '2018', value: '2018', checked: false },
    { name: '2017', value: '2017', checked: false },
    { name: '2016', value: '2016', checked: false }
  ];

  public typeOptions = [
    { name: 'Sedan', value: 'Sedan', checked: false },
    { name: 'Hatchback', value: 'Hatchback', checked: false },
    { name: 'SUV', value: 'SUV', checked: false },
    { name: 'Coupe', value: 'Coupé', checked: false },
    { name: 'Van', value: 'Van', checked: false },
    { name: 'Truck', value: 'Truck', checked: false },
    { name: 'Convertible', value: 'Convertible', checked: false },
    { name: 'Sport', value: 'Sport', checked: false },
    { name: 'Wagon', value: 'Wagon', checked: false }
  ];


  ngOnInit() {
    this.routeSubscription = this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('brand')) {
        this.brandOptions = this.brandOptions.map((brandOption) => {
          if (brandOption.name === params.get('brand')) {
            brandOption.checked = true;
          }
          return brandOption;
        });
      } else if (params.get('type')) {
        this.typeOptions = this.typeOptions.map((typeOption) => {
          if (typeOption.name === params.get('type')) {
            typeOption.checked = true;
          }
          return typeOption;
        });
      }
    });
    this.onFilter();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  onClick() {
    this.brandOptions[1].checked = !this.brandOptions[1].checked;
    // console.log(this.brandOptions[1].checked);
  }

  onFilter() {
    const arrOptions = this.priceOptions.filter((priceOption) => priceOption.checked);
    const arrOptionsBrand = this.brandOptions.filter((brandOption) => brandOption.checked);
    const arrOptionsYear = this.yearOptions.filter((yearOption) => yearOption.checked);
    const arrOptionsType = this.typeOptions.filter((typeOption) => typeOption.checked);

    const arrOfObj = [arrOptions, arrOptionsBrand, arrOptionsYear, arrOptionsType];
    this.filterEmitter.emit(arrOfObj);
    // console.log(arrOfObj);
    // console.log(this.brandOptions[1].checked);
    // this.filterEmitter.emit(arrOptionsBrand);
  }
}
