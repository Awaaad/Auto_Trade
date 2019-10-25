import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { CarItem } from '../../entities/car-item.entity';
import { DetailsService, CarDetails } from '../inventory/details/details.service';
import { ProductService } from '../services/product.services';

// import { Details} from '../inventory/details.model';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})

export class CarDetailsComponent implements OnInit {
  // details: Details;
  carDetails: Array<CarDetails>;
  private items: CarItem[] = [];
  private total: number = 0;
  private totalQuantity: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private _detailsService: DetailsService,
    private router: Router) {   }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.carDetails = this._detailsService.getCarDetails();

    this.carDetails = this.carDetails.filter(data => data.id === id);
    // console.log(this.carDetails);
  }


  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  incrementCart() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.carDetails = this._detailsService.getCarDetails();
    this.carDetails = this.carDetails.filter(data => data.id === id);
    // console.log("adding", this.carDetails);

    this._detailsService.setUrl(this.carDetails[0].id);
    // this.router.navigate(['/cart', { id:this.carDetails[0].id }]);


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
    this.loadCart();

    window.location.reload();
  // setTimeout( () =>  window.location.reload(), 2000 );

  }


  loadCart(): void {
    this.total = 0;
    this.totalQuantity = 0;
    this.items = [];
    const cart = JSON.parse(localStorage.getItem('cart'));
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < cart.length; i++) {
      const item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
      this.totalQuantity += 0 + item.quantity;
    }
    localStorage.setItem('quantity', JSON.stringify(this.totalQuantity));
  }
}


