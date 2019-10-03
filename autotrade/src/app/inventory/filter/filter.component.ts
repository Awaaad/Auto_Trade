import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss', '../inventory.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterEmitter = new EventEmitter();

  public priceOptions = [
    { name: 'Rs0 - Rs100 000', value: 'Rs0 - Rs100 000', checked: true, range: { min: 0, max: 100000 } },
    { name: 'Rs100 000 - Rs300 000', value: 'Rs100 000 - Rs300 000', range: { min: 100001, max: 300000 }, checked: false },
    { name: 'Rs300 000 - Rs500 000', value: 'Rs300 000 - Rs500 000', range: { min: 300001, max: 500000 }, checked: false },
    { name: 'Rs500 000 - Rs700 000', value: 'Rs500 000 - Rs700 000', range: { min: 500001, max: 700000 }, checked: false }
  ];

  ngOnInit() {
    this.onFilter();
  }

  onFilter() {
    const arrOptions = this.priceOptions.filter((priceOption) => priceOption.checked);
    this.filterEmitter.emit(arrOptions);
  }

}
