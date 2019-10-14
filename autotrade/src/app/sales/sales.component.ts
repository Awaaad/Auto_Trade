import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; 
import { DetailsService, CarDetails } from '../inventory/details/details.service';
import * as $ from 'jquery';
import * as slick from 'slick-carousel';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  carDetails: Array<CarDetails>;
  constructor(private router: Router, private detailsService: DetailsService) { }

  title = 'ngSlick';
  slides = [
    // {
    //   img: '../../assets/logo/kia.png',
    //   brand: 'Kia'
    // },
    // { img: '../../../assets/logo/honda.png' ,
    //   brand: 'Honda'
    // },
    // {
    //   img: '../../../assets/logo/chevrolet.png',
    //   brand: 'Chevrolet'
    // },
    // {
    //   img: '../../../assets/logo/mercedes.png',
    //   brand: 'Mercedes'
    // },
    // {
    //   img: '../../../assets/logo/hyundai.png',
    //   brand: 'Hyundai'
    // },
    // {
    //   img: '../../../assets/logo/jeep.png',
    //   brand: 'Jeep'
    // },
    // {
    //   img: '../../../assets/logo/ford.png',
    //   brand: 'Ford'
    // },
    // {
    //   img: '../../../assets/logo/audi.png',
    //   brand: 'Audi'
    // },
    // {
    //   img: '../../../assets/logo/volkswagen.png',
    //   brand: 'Volkswagen'
    // }
  ];

  slidesType = [
    { 
      img: '../../../assets/BodyType/Sedan1.jpg',
      type: 'Sedan'
    },
    { img: '../../../assets/BodyType/Hybrid1.jpg' ,
      type: 'Hatchback'
    },
    { 
      img: '../../../assets/BodyType/SUV1.jpg' ,
      type: 'SUV'
    },
    { 
      img: '../../../assets/BodyType/Coupe1.jpg', 
      type: 'Coupe'
    },
    { 
      img: '../../../assets/BodyType/COnvertible1.jpg',
      type: 'Convertible'
    },
    { 
      img: '../../../assets/BodyType/Wagon1.jpg',
      type: 'Wagon'
    },
    { 
      img: '../../../assets/BodyType/Truck1.jpg',
      type: 'Truck'
    },
    { 
      img: '../../../assets/BodyType/Sports1.jpg',
      type: 'Sport'
    },

  ];



  slideConfig = {
    "slidesToShow": 7,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  slideConfigType = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };


  ngOnInit() {
    this.carDetails = this.detailsService.getCarDetails();
    this.fourItems();
  }

  fourItems(){
    this.carDetails = this.carDetails.filter((car, idx) => idx < 4); 
  }
  onSelect(id: number) {
        this.router.navigate(['/details', id]);
      } 

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}