import { Injectable } from '@angular/core';

export interface CarDetails {
  id: number;
  title: string;
  power: string;
  mileage: string;
  fuel: string;
  year: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }

  public getCarDetails(): Array<CarDetails> {
    return [{
      id: 1,
      title: 'Suzuki',
      power: '69bhp@6000rpm',
      mileage: 'km/liter',
      fuel: 'Diesel',
      year: '2019',
      price: 100000
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
