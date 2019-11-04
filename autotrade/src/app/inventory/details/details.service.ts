import { Injectable } from '@angular/core';

export interface CarDetails {
  id: number;
  brand: string;
  model: string;
  engine: string;
  mileage: string;
  fuel: string;
  year: string;
  price: number;
  type: string;
  transmission: string;
  carImage: string;
  carImage1: string;
  carImage2: string;
  carImage3: string;
  carImage4: string;
  carImage5: string;
  carImage6: string;
}

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }

  private url: number;

  public setUrl(url: number): void {
    console.log(url);
    this.url = url;
  }

  public getUrl(): number {
    return this.url;
  }

  public getCarDetails(): Array<CarDetails> {
    return [{
      id: 1,
      brand: 'Suzuki',
      model: 'Swift',
      engine: '1248',
      mileage: '28.40 km/liter',
      fuel: 'Diesel',
      year: '2019',
      price: 450000,
      type: 'Hatchback',
      transmission: 'Automatic',
      carImage: '../../../assets/Suzuki-Swift/Main.jpg',
      carImage1: '../../../assets/Suzuki-Swift/1.jpg',
      carImage2: '../../../assets/Suzuki-Swift/2.jpg',
      carImage3: '../../../assets/Suzuki-Swift/3.jpg',
      carImage4: '../../../assets/Suzuki-Swift/4.jpg',
      carImage5: '../../../assets/Suzuki-Swift/5.jpg',
      carImage6: ''
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
      type: 'Coupe',
      transmission: 'Automatic',
      carImage: '../../../assets/Mercedes Benz/Main.jpg',
      carImage1: '../../../assets/Mercedes Benz/1.jpg',
      carImage2: '../../../assets/Mercedes Benz/2.jpg',
      carImage3: '../../../assets/Mercedes Benz/3.jpg',
      carImage4: '../../../assets/Mercedes Benz/4.jpg',
      carImage5: '../../../assets/Mercedes Benz/5.jpg',
      carImage6: ''
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
      type: 'Sedan',
      transmission: 'Automatic',
      carImage: '../../../assets/BMW/Main.jpg',
      carImage1: '../../../assets/BMW/1.jpg',
      carImage2: '../../../assets/BMW/2.jpg',
      carImage3: '../../../assets/BMW/3.jpg',
      carImage4: '../../../assets/BMW/4.jpg',
      carImage5: '../../../assets/BMW/5.jpg',
      carImage6: ''
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
      type: 'Hatchback',
      transmission: 'Automatic',
      carImage: '../../../assets/Hyndai i20/Main.jpg',
      carImage1: '../../../assets/Hyndai i20/1.jpg',
      carImage2: '../../../assets/Hyndai i20/2.jpg',
      carImage3: '../../../assets/Hyndai i20/3.jpg',
      carImage4: '../../../assets/Hyndai i20/4.jpg',
      carImage5: '../../../assets/Hyndai i20/5.jpg',
      carImage6: ''
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
      type: 'Sedan',
      transmission: 'Manual',
      carImage: '../../../assets/Nissan Sunny/Main.jfif',
      carImage1: '../../../assets/Nissan Sunny/1.jpg',
      carImage2: '../../../assets/Nissan Sunny/2.jpg',
      carImage3: '../../../assets/Nissan Sunny/3.jpg',
      carImage4: '../../../assets/Nissan Sunny/4.jpg',
      carImage5: '../../../assets/Nissan Sunny/5.jpg',
      carImage6: ''
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
      type: 'Sport',
      transmission: 'Automatic',
      carImage: '../../../assets/Ford Mustang/Main.jpg',
      carImage1: '../../../assets/Ford Mustang/1.jpg',
      carImage2: '../../../assets/Ford Mustang/2.jpg',
      carImage3: '../../../assets/Ford Mustang/3.jpg',
      carImage4: '../../../assets/Ford Mustang/4.jpg',
      carImage5: '../../../assets/Ford Mustang/5.jpg',
      carImage6: '../../../assets/Ford Mustang/homepage.png'
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
      type: 'SUV',
      transmission: 'Manual',
      carImage: '../../../assets/Kia Seltos/Main.jpg',
      carImage1: '../../../assets/Kia Seltos/1.jpg',
      carImage2: '../../../assets/Kia Seltos/2.jpg',
      carImage3: '../../../assets/Kia Seltos/3.jpg',
      carImage4: '../../../assets/Kia Seltos/4.jpg',
      carImage5: '../../../assets/Kia Seltos/5.jpg',
      carImage6: ''
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
      type: 'Sedan',
      transmission: 'Automatic',
      carImage: '../../../assets/Honda Amaze/Main.jpg',
      carImage1: '../../../assets/Honda Amaze/1.jpg',
      carImage2: '../../../assets/Honda Amaze/2.jpg',
      carImage3: '../../../assets/Honda Amaze/3.jpg',
      carImage4: '../../../assets/Honda Amaze/4.jpg',
      carImage5: '../../../assets/Honda Amaze/5.jpg',
      carImage6: ''
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
      type: 'SUV',
      transmission: 'Manual',
      carImage: '../../../assets/Mitsubishi Pajero/Main.jfif',
      carImage1: '../../../assets/Mitsubishi Pajero/1.jpg',
      carImage2: '../../../assets/Mitsubishi Pajero/2.jpg',
      carImage3: '../../../assets/Mitsubishi Pajero/3.jpg',
      carImage4: '../../../assets/Mitsubishi Pajero/4.jpg',
      carImage5: '../../../assets/Mitsubishi Pajero/5.jpg',
      carImage6: ''
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
      type: 'SUV',
      transmission: 'Automatic',
      carImage: '../../../assets/Mitsubishi Outlander/Mitsubishi Outlander.jpg',
      carImage1: '../../../assets/Mitsubishi Outlander/1.jpg',
      carImage2: '../../../assets/Mitsubishi Outlander/2.jpg',
      carImage3: '../../../assets/Mitsubishi Outlander/3.jpg',
      carImage4: '../../../assets/Mitsubishi Outlander/4.jpg',
      carImage5: '../../../assets/Mitsubishi Outlander/5.jpg',
      carImage6: ''
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
      type: 'Convertible',
      transmission: 'Automatic',
      carImage: '../../../assets/MercedesBenz-C/Main.jpg',
      carImage1: '../../../assets/MercedesBenz-C/1.jpg',
      carImage2: '../../../assets/MercedesBenz-C/2.jpg',
      carImage3: '../../../assets/MercedesBenz-C/3.jpg',
      carImage4: '../../../assets/MercedesBenz-C/4.jpg',
      carImage5: '../../../assets/MercedesBenz-C/5.jpg',
      carImage6: ''
    },
  ];
  }
}
