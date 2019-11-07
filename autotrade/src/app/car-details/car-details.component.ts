import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CarItem } from '../../entities/car-item.entity';
import { DetailsService, CarDetails } from '../inventory/details/details.service';
import { ProductService } from '../services/product.services';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';
import { CartService } from '../services/cart.service';
import { TouchSequence } from 'selenium-webdriver';

// import { Details} from '../inventory/details.model';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})

export class CarDetailsComponent implements OnInit {
  // details: Details;
  carDetails: Array<CarDetails>;

  contactForm: FormGroup;
  submitted = false;
  showMsg = false;
  addToCart = false;

  quantity: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private _detailsService: DetailsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private cartService: CartService) { }

  get f() { return this.contactForm.controls; }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorsService.namePattern)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

    // const quantityObservable = this.cartService.getQuantity();
    // quantityObservable.subscribe((this.quantityData => ))

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.carDetails = this._detailsService.getCarDetails();

    this.carDetails = this.carDetails.filter(data => data.id === id);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    else {
      this.showMsg = true;
    }
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.showMsg = false;
      this.submitted = false;
      document.forms["form"].reset();
    }, 2000);
  }

  close() {
    this.submitted = false;
  }

  incrementCart() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.carDetails = this._detailsService.getCarDetails();
    this.carDetails = this.carDetails.filter(data => data.id === id);

    this._detailsService.setUrl(this.carDetails[0].id);

    if (id) {
      const item: CarItem = {
        product: this.productService.find(id),
        quantity: 1
      };
      if (localStorage.getItem('cart') == null) {
        const cart: any = [];
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        const cart: any = JSON.parse(localStorage.getItem('cart'));
        let index: number = -1;
        for (let i = 0; i < cart.length; i++) {
          // tslint:disable-next-line: no-shadowed-variable
          const item: CarItem = JSON.parse(cart[i]);
          if (item.product.id === id) {
            index = i;
            break;
          }
        }
        if (index === -1) {
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          const item: CarItem = JSON.parse(cart[index]);
          item.quantity += 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    }
    this.cartService.loadCart();
    this.cartService.getQuantity(this.cartService.totalQuantity);
    this.cartService.castQuantity.subscribe(quantity => this.quantity = quantity);
    console.log(this.quantity);
    this.addToCart = true;

  }

  //Car Financing
  calculatePayments() {
    var vehiclePrice = (<HTMLInputElement>document.getElementById('vehiclePrice')).value,
      loanTerm = (<HTMLInputElement>document.getElementById('loanTerm')).value,
      intRate = (<HTMLInputElement>document.getElementById('intRate')).value,
      downPayment = (<HTMLInputElement>document.getElementById('downPayment')).value,
      tradeValue = (<HTMLInputElement>document.getElementById('tradeValue')).value,
      amount = parseInt(vehiclePrice),
      months = parseInt(loanTerm),
      down = parseInt(downPayment),
      trade = parseInt(tradeValue),
      totalDown = down + trade
    const annInterest = parseFloat(intRate),
      monInt = annInterest / 1200;

    if (!amount) {
      alert('Please add a loan amount');
      return;
    }

    if (!months) {
      months = 60;
      loanTerm = (<HTMLInputElement>document.getElementById('loanTerm')).value = '60';
    }

    if (!downPayment) {
      down = 0;
      downPayment = (<HTMLInputElement>document.getElementById('downPayment')).value = '0';
    }

    if (!trade) {
      trade = 0;
      tradeValue = (<HTMLInputElement>document.getElementById('tradeValue')).value = '0';
    }

    if (!annInterest) {
      let annInterest = 3.25;
      intRate = (<HTMLInputElement>document.getElementById('intRate')).value = '3.25';
    }


    var calc = ((monInt + (monInt / (Math.pow((1 + monInt), months) - 1))) * (amount - (totalDown || 0))).toFixed(2);

    var paymentResults = document.getElementById('paymentResults');
    paymentResults.style.display = 'block';
    paymentResults.innerHTML = '';
    var results = document.createElement('div');
    results.innerHTML = '<h1 style="text-align:center; font-size: 20px;">Estimated Monthly Payment is:<br/></h1>' + '<h3 style="text-align:center; font-size: 18px;">Rs' + calc + '/Month</h3>';

    paymentResults.append(results);
  }
}


