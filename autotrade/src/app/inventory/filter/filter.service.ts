import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterByCheckboxes(cards) {
    cards.filter();
    return cards;
  }
}
